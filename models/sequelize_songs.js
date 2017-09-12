module.exports = function(sequelize, DataTypes) {
    var All_Song = sequelize.define("All_Song", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Artist: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Tempo: {
            type: DataTypes.DECIMAL (5,2),
            allowNull: false,
            validate: {
                isDecimal: true      
            }
        },
        Duration: {
            type: DataTypes.TIME,
            allowNull: false
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
        Title: {
            type: DataTypes.STING,
            allowNull: false,
            validate: {
                len: [1]
            }
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
        }
    });
    return All_Song;
};