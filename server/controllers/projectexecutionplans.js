const ProjectExecutionPlan = require("../models").ProjectExecutionPlan;

module.exports.index = (request, response, next) => {
    ProjectExecutionPlan.findAll().then((res) => {
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
    ProjectExecutionPlan.create({...request.body})
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
    ProjectExecutionPlan.findAll({
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
    ProjectExecutionPlan.update(
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
    ProjectExecutionPlan.destroy({
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