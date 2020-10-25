const User = require("../models").User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.create = (request, response, next) => {
    bcrypt.hash(request.body.password, 10).then((hash) => {
        let userData = { ...request.body, password: hash };
        User.create(userData)
        .then(result => {
            const {id, email, userRole = 0 } = result.id;
            const payLoadParam = [id, email, userRole].join('!~+=');
            const token = jwt.sign({userId: payLoadParam}, 'RANDOM_TOKEN_SECRET', {expiresIn:'24h'});

            return response.status(201).json({
                "status": true, "message": "success", "data": { token, userId: id, userRole }
            });
        })
        .catch((error) => {
            return response.status(400).json({
                "status": false, "message": error.message || "fail", "data": {}
            });
        });
    }).catch((error) => {
        console.log(error);
        return response.status(400).json({
            "status": false, "message": "process fail", "data": {}
        });
    });
};


module.exports.login = (request, response, next) => {
    const { email, password } = request.body;
    User.findAll({
        where:{ email }
    }).then((res) => {
        let result = res[0].dataValues;
        bcrypt.compare(password, result.password)
        .then((valid) => {
            if (!valid) {
                return response.status(401).json({
                    "status": false, "message": "Incorrect Password", "data": {}
                });
            }

            const {id, email, userRole = 0 } = result;
            const payLoadParam = [id, email, userRole].join('!~+=');
            const token = jwt.sign({userId: payLoadParam}, 'RANDOM_TOKEN_SECRET', {expiresIn:'24h'});
            return response.status(201).json({
                "status": true, "message": "success", "data": { token, userId: id, userRole }
            });
        })
        .catch((error) => {
            return response.status(401).json({
                "status": false, "message": "User cannot be Authenticated!", "data": {}
            });
        });
    }).catch((err) => {
        return response.status(500).json({
            status: false,
            message: "Usercould not retrieved.",
            data: err
        });
    });
};

module.exports.index = (request, response, next) => {
    User.findAll().then((res) => {
        return response.status(200).json({
            status: true,
            message: "success",
            data: res
        });
    }).catch((err) => {
        return response.status(500).json({
            status: false,
            message: "Could not retrieved user type.",
            data: err
        });
    });
};

// module.exports.create = (request, response, next) => {
//     User.create({...request.body})
//     .then((res) => {
//         return response.status(200).json({
//             status: true,
//             message: "success",
//             data: res
//         });
//     }).catch((err) => {
//         return response.status(500).json({
//             status: false,
//             message: "could not saved user type.",
//             data: err
//         });
//     });
// };

module.exports.show = (request, response, next) => {
    User.findAll({
        where:{ id:request.params.id }
    }).then((res) => {
        return response.status(200).json({
            status: true,
            message: "success",
            data: res
        });
    }).catch((err) => {
        return response.status(500).json({
            status: false,
            message: "User type could not retrieved.",
            data: err
        });
    });
};

module.exports.update = (request, response, next) => {
    User.update(
        { ...request.body }, 
        { where: { id: request.params.id } })
      .then((res) => {
        return response.status(200).json({
          status: true,
          message: "success",
          data: res,
        });
      })
      .catch((err) => {
        return response.status(500).json({
          status: false,
          message: "User type not updated.",
          data: err,
        });
      });
};

module.exports.remove = (request, response, next) => {
    User.destroy({
        where:{ id:request.params.id }
    }).then((res) => {
        return response.status(200).json({
            status: true,
            message: "User type deleted successful!",
            data: res
        });
    }).catch((err) => {
        return response.status(500).json({
            status: false,
            message: "User type could not be deleted.",
            data: err,
        });
    })
};