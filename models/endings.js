module.exports = function (sequelize, DataTypes) {
    var Question = sequelize.define("endings", {
        adventure: DataTypes.TEXT,
        story: DataTypes.TEXT
    });
    return Question;
};