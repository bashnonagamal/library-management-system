'use strict';

const dummyBorrowers = [
  {
    name: "Marc Jose",
    email: "marcjose@example.com",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Jane Doe",
    email: "janedoe@example.com",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Bob Smith",
    email: "bobsmith@example.com",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
  }];

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('borrowers', dummyBorrowers);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('borrowers', null, {});
  }
};



