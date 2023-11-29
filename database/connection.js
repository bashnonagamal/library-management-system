const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
});


const db = {};

db.sequelize = sequelize;
db.sequelize = sequelize;
//-------------------------
// Defining all the tables
//-------------------------
db.Book = require("../models/books")(sequelize, Sequelize);
db.Borrower = require("../models/borrowers")(sequelize, Sequelize);
db.BorrowedBook = require("../models/borrowed_books")(sequelize, Sequelize);


// ------------------------------
// Defining all the associations
//-------------------------------
// Many to many (Many to Many)
db.Book.belongsToMany(db.Borrower, { through: 'borrowed_books', foreignKey: 'book_id', as: 'borrowers' });
db.Borrower.belongsToMany(db.Book, {through: 'borrowed_books', foreignKey: 'borrower_id', as: 'books'});
db.BorrowedBook.belongsTo(db.Book, {through: 'books', foreignKey: 'book_id'});
db.BorrowedBook.belongsTo(db.Borrower, {through: 'borrowers', foreignKey: 'borrower_id'});

module.exports = db;