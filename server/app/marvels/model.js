'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Marvels extends Model {

    }
    Marvels.init({
        name: DataTypes.STRING,
        category: DataTypes.STRING,
        leadCharacter: DataTypes.STRING,
        releaseData: DataTypes.DATE,
        studio: DataTypes.STRING,
    }, {
        sequelize,
        tableName: 'marvels',
        paranoid: true
    });

    return Marvels;
}