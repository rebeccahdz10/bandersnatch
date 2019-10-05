module.exports = function (sequelize, DataTypes) {
    var endings = sequelize.define("endings", {
        adventure: DataTypes.TEXT,
        story: DataTypes.TEXT
    });
    return endings;
};