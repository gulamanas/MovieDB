'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Movies extends Model {

    }
    Movies.init({
        title: DataTypes.STRING,
        language: DataTypes.STRING,
        releaseDate: DataTypes.DATE,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
    }, {
        sequelize,
        tableName: 'movies',
        paranoid: true,
    })

    return Movies
}