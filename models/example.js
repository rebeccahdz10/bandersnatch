module.exports = function (sequelize, DataTypes) {
    var Question = sequelize.define("Example", {
        text: DataTypes.STRING,
        description: DataTypes.TEXT
    });
    return Question;
};