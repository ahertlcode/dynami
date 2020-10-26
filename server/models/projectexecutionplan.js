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
      ProjectExecutionPlan.belongsTo(models.User, {foreignKey: 'developerId'});
    }
  };
  ProjectExecutionPlan.init({
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    executionPlan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    developerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    percentDone: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'ProjectExecutionPlan',
  });
  return ProjectExecutionPlan;
};