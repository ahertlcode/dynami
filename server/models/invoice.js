'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Invoice.belongsTo(models.User);
    }
  };
  Invoice.init({
    projectId: DataTypes.INTEGER,
    fileName: DataTypes.STRING,
    invoiceNumber: DataTypes.STRING,
    invoiceValue: DataTypes.FLOAT,
    justification: DataTypes.STRING,
    vendorId: DataTypes.INTEGER,
    approved: DataTypes.BOOLEAN,
    supplied: DataTypes.BOOLEAN,
    confirmed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};