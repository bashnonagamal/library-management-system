'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Borrower, { through: 'borrowed_books', foreignKey: 'book_id', as: 'borrowers' });
    }
  };
  Book.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    ISBN: DataTypes.STRING,
    available_quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};