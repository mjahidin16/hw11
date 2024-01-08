'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Todos', [{
      title: 'Belajar sequelize',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Belajar sequelize1',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Belajar sequelize2',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
