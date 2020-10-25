const UserType = require("../models").UserType;

module.exports.index = (request, response, next) => {
    UserType.findAll().then((res) => {
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

module.exports.create = (request, response, next) => {
    UserType.create({...request.body})
    .then((res) => {
        return response.status(200).json({
            status: true,
            message: "success",
            data: res
        });
    }).catch((err) => {
        return response.status(500).json({
            status: false,
            message: "could not saved user type.",
            data: err
        });
    });
};

module.exports.show = (request, response, next) => {
    UserType.findAll({
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
    UserType.update(
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
    UserType.destroy({
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