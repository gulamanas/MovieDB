'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('directors', [{
      fname: 'Anthony',
      lname: 'Russo',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      fname: 'Joe',
      lname: 'Russo',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      fname: 'Rakesh',
      lname: 'Roshan',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('directors', null, {})
  }
};
