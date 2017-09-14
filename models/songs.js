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
        Danceability: {
            type: DataTypes.DECIMAL (7,6),
            allowNull: false,
            validate: {
                isDecimal: true,
                len: [.001, .999]   
            }
        },
        Tempo: {
            type: DataTypes.DECIMAL (5,2),
            allowNull: false,
            validate: {
                isDecimal: true,
                len: [.001, 200]      
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
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    return All_Song;

};