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
      User.hasMany(models.Donation);
      User.hasMany(models.Invoice);
      User.hasMany(models.Project);
      User.hasMany(models.ProjectExecutionPlan);
      User.hasMany(models.ProjectState)
    }
  };
  User.init({
    userTypeId: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    walletAddress: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};