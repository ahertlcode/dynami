'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectTitle: {
        type: Sequelize.STRING
      },
      projectLocationId: {
        type: Sequelize.INTEGER
      },
      requiredGadget: {
        type: Sequelize.STRING
      },
      proposedValue: {
        type: Sequelize.FLOAT
      },
      workmanship: {
        type: Sequelize.FLOAT
      },
      developerId: {
        type: Sequelize.INTEGER
      },
      approved: {
        type: Sequelize.BOOLEAN
      },
      started: {
        type: Sequelize.BOOLEAN
      },
      completed: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Projects');
  }
};