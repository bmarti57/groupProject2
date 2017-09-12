module.exports = function(sequelize, DataTypes) {
    var All_Song = sequelize.define("All_Song", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Decade: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        },
        Genre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Length: {
            type: DataTypes.TIME,
            allowNull: false
        },
        Danceability: {
            type: DataTypes.DECMIAL (7,6),
            allowNull: false,
            validate: {
                isDecimal: true      
            }
        },
        Tempo: {
            type: DataTypes.DECIMAL (5,2),
            allowNull: false,
            validate: {
                isDecimal: true      
            }
        },
        Artist: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Title: {
            type: DataTypes.STING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    return All_Song;

    var Game = sequelize.define("Game", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Game;

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
    return Game_Choice;

};