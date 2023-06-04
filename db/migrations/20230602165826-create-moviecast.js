'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('moviecast', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING,
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
      actorId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'actors'
          },
          key: 'id'
        },
        allowNull: false,
      }
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('moviecast')
  }
};
