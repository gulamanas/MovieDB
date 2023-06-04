'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('reviewers', [{
      revName: 'Random Person 1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      revName: 'Random Person 2',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('reviewers', null, {})
  }
};
