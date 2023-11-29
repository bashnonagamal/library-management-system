'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('borrowed_books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      borrower_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'borrowers',
          },
          key: 'id'
        },
        allowNull: false
      },
      book_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'books',
          },
          key: 'id'
        },
        allowNull: false
      },
      due_date: {
        type: Sequelize.DATE
      },
      isReturned: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('borrowed_books');
  }
};