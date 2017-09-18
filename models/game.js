module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Game;
};