'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('moviedirection', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        default: null,
        type: Sequelize.DATE
      },
      movieId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'movies'
          },
          key: 'id'
        },
        allowNull: false,
      },
      directorId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'directors'
          },
          key: 'id'
        },
        allowNull: false,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('moviedirection')
  }
};
