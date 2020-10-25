'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectExecutionPlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProjectExecutionPlan.belongsTo(models.User);
    }
  };
  ProjectExecutionPlan.init({
    projectId: DataTypes.INTEGER,
    executionPlan: DataTypes.STRING,
    developerId: DataTypes.INTEGER,
    percentDone: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'ProjectExecutionPlan',
  });
  return ProjectExecutionPlan;
};