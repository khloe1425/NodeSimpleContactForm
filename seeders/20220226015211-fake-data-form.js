'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('forms', [{
        fullName: 'John Doe',
        email: "johnDoe@gmail.com",
        issues:"Khiếu nại",
        description:"Hello Hello"
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
