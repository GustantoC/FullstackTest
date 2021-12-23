'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Transactions', [{
      description: 'Rent',
      amount: 100000,
      income: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Food',
      amount: 25000,
      income: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Car',
      amount: 50000,
      income: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Salary',
      amount: 2000000,
      income: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Transactions', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
