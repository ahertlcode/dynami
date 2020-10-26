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
      Invoice.belongsTo(models.User, {foreignKey: 'vendorId'});
    }
  };
  Invoice.init({
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fileName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    invoiceNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    invoiceValue: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    justification: DataTypes.STRING,
    vendorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    approved: DataTypes.BOOLEAN,
    supplied: DataTypes.BOOLEAN,
    confirmed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};