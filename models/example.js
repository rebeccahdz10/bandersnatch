module.exports = function (sequelize, DataTypes) {
    var Question = sequelize.define("question", {
        text: DataTypes.STRING,
        description: DataTypes.TEXT
    });
    return Question;
};