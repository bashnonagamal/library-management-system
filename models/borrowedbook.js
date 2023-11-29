'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BorrowedBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Book, {through: 'books', foreignKey: 'book_id'});
      this.belongsTo(models.Borrower, {through: 'borrowers', foreignKey: 'borrower_id'});
      
    }
  };
  BorrowedBook.init({
    borrower_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER,
    due_date: DataTypes.DATE,
    isReturned: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'BorrowedBook',
  });
  return BorrowedBook;
};