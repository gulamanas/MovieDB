'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class MovieGenres extends Model {
        static associate(models) {
            MovieGenres.belongsTo(models.Movies, {
                foreignKey: 'movieId'
            });

            MovieGenres.belongsTo(models.Genres, {
                foreignKey: 'genreId'
            });
        }
    }
    MovieGenres.init({
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
    }, {
        sequelize,
        tableName: 'moviegenres',
        paranoid: true,
    })

    return MovieGenres;
}

