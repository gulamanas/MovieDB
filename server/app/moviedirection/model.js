'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class MovieDirections extends Model {
        static associate(models) {
            MovieDirections.belongsTo(models.Movies, {
                foreignKey: 'movieId'
            });

            MovieDirections.belongsTo(models.Directors, {
                foreignKey: 'directorId'
            });
        }
    }
    MovieDirections.init({
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
    }, {
        sequelize,
        tableName: 'moviedirection',
        paranoid: true,
    })

    return MovieDirections;
}

