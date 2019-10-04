module.exports = function (sequelize, DataTypes) {
    var Question = sequelize.define("mainDialogue", {
        question: DataTypes.TEXT,
        option1: DataTypes.TEXT,
        option2: DataTypes.TEXT
    });
    return Question;
};