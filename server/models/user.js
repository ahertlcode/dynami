'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.UserType);
      User.hasMany(models.Donation, {foreignKey: 'donorId'});
      User.hasMany(models.Invoice, {foreignKey: 'vendorId'});
      User.hasMany(models.Project, {foreignKey: 'developerId'});
      User.hasMany(models.ProjectExecutionPlan, {foreignKey: 'developerId'});
      User.hasMany(models.ProjectState, {foreignKey: 'developerId'})
    }
  };
  User.init({
    userTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    walletAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};