'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class DCMovies extends Model {

    }
    DCMovies.init({
        name: DataTypes.STRING,
        category: DataTypes.STRING,
        leadCharacter: DataTypes.STRING,
        releaseData: DataTypes.DATE,
        studio: DataTypes.STRING,
    }, {
        sequelize,
        tableName: 'dc',
        paranoid: true
    });

    return DCMovies;
}