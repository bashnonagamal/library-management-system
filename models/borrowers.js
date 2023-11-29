module.exports = (sequelize, DataTypes) => {
    const borrowers = sequelize.define("borrowers", {
        id: {
            type: DataTypes.STRING(36),
            primaryKey: true
        },
        name: DataTypes.STRING(256),
        email: DataTypes.STRING(320),
        registered_date: DataTypes.DATE,
    }, {
        timestamps: false,
        freezeTableName: true,
    });
    return borrowers;
}


