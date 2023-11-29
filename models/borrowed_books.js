module.exports = (sequelize, DataTypes) => {
    const borrowed_books = sequelize.define("borrowed_books", {
        id: {
            type: DataTypes.STRING(36),
            primaryKey: true
        },
        borrower_id: DataTypes.STRING(36),
        book_id: DataTypes.STRING(36),
        borrowing_date: DataTypes.DATE,
        due_date: DataTypes.DATE,
        isReturned: DataTypes.BOOLEAN,
    }, {
        timestamps: false,
        freezeTableName: true,
    });
    return borrowed_books;
}


