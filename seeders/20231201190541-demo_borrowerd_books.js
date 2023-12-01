'use strict';

const dummyBorrowedbooks = [
  {
    book_id: 1,
    borrower_id: 2,
    due_date: new Date("2023-08-15T00:00:00.000Z"),
    isReturned: null,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book_id: 2,
    borrower_id: 3,
    due_date: new Date("2024-01-01T00:00:00.000Z"),
    isReturned: null,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book_id: 3,
    borrower_id: 1,
    due_date: new Date("2023-11-30T00:00:00.000Z"),
    isReturned: null,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book_id: 5,
    borrower_id: 2,
    due_date: new Date("2023-12-15T00:00:00.000Z"),
    isReturned: null,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book_id: 4,
    borrower_id: 3,
    due_date: new Date("2023-11-15T00:00:00.000Z"),
    isReturned: null,
    createdAt: new Date(),
    updatedAt: new Date()
  },];

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('borrowedbooks', dummyBorrowedbooks);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('borrowedbooks', null, {});
  }
};



