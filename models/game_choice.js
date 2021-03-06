module.exports = function(sequelize, DataTypes) {
    var Game_Choice = sequelize.define("Game_Choice", {
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        song_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Game_Choice.associate = function(models) {
        Game_Choice.belongsTo(models.All_Song, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    
    return Game_Choice;
};

