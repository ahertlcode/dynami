'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.belongsTo(models.User)
    }
  };
  Project.init({
    projectTitle: DataTypes.STRING,
    projectLocationId: DataTypes.INTEGER,
    requiredGadget: DataTypes.STRING,
    proposedValue: DataTypes.FLOAT,
    workmanship: DataTypes.FLOAT,
    developerId: DataTypes.INTEGER,
    approved: DataTypes.BOOLEAN,
    started: DataTypes.BOOLEAN,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};