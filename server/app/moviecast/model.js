'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class MovieCast extends Model {
        static associate(models) {
            MovieCast.belongsTo(models.Movies, {
                foreignKey: 'movieId'
            });

            MovieCast.belongsTo(models.Actors, {
                foreignKey: 'actorId'
            })
        }
    }
    MovieCast.init({
        role: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
    }, {
        sequelize,
        tableName: 'moviecast',
        paranoid: true,
    })

    return MovieCast;
}