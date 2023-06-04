'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Actors extends Model {

    }
    Actors.init({
        fname: DataTypes.STRING,
        lname: DataTypes.STRING,
        gender: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
    }, {
        sequelize,
        tableName: 'actors',
        paranoid: true,
    })

    return Actors
}