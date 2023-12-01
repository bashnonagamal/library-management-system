'use strict';

const dummyBooks = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    ISBN: "978-8535902803",
    available_quantity: 12,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    ISBN: "978-0385494653",
    available_quantity: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    ISBN: "978-1416549763",
    available_quantity: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    ISBN: "978-1435963547",
    available_quantity: 15,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    ISBN: "978-1465476677",
    available_quantity: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  }]

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('books', dummyBooks);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('books', null, {});
  }
};


