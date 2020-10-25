const ProjectState = require("../models").ProjectState;

module.exports.index = (request, response, next) => {
    ProjectState.findAll().then((res) => {
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
    ProjectState.create({...request.body})
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
    ProjectState.findAll({
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
    ProjectState.update(
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
    ProjectState.destroy({
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