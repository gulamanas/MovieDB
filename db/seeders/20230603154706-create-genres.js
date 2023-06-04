'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('genres', [{
      title: 'Action',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Comedy',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Adventure',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('genres', null, {})
  }
};
