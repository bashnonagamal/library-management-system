module.exports = (sequelize, DataTypes) => {
    const books = sequelize.define("books", {
        id: {
            type: DataTypes.STRING(36),
            primaryKey: true
        },
        title: DataTypes.STRING(128),
        author: DataTypes.STRING(256),
        ISBN: DataTypes.DATE,
        available_quantity: DataTypes.INTEGER,
    }, {
        timestamps: false,
        freezeTableName: true,
    });
    return books;
}


