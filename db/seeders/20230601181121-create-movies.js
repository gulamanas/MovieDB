'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('movies', [{
      title: 'The Avengers',
      language: 'English',
      releaseDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Batman',
      language: 'English',
      releaseDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: '3 Idiots',
      language: 'Hindi',
      releaseDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('movies', null, {})
  }
};
