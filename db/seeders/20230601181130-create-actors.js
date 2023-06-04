'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('actors', [{
      fname: 'Robert D.',
      lname: 'Junior',
      gender: 'Male',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      fname: 'Shahrukh Khan',
      lname: 'Khan',
      gender: 'Male',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      fname: 'Tom',
      lname: 'Cruise',
      gender: 'Male',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      fname: 'Priyanka',
      lname: 'Chopra',
      gender: 'Female',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      fname: 'Angellina',
      lname: 'Jolie',
      gender: 'Female',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('actors', null, {})
  }
};
