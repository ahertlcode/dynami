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
      Project.belongsTo(models.User, {foreignKey: 'developerId'})
    }
  };
  Project.init({
    projectTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    projectLocationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    requiredGadget: {
      type: DataTypes.STRING,
      allowNull: false
    },
    proposedValue: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    workmanship: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    developerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    approved: DataTypes.BOOLEAN,
    started: DataTypes.BOOLEAN,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};