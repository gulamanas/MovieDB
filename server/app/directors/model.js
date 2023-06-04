'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Directors extends Model {

    }
    Directors.init({
        fname: DataTypes.STRING,
        lname: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
    }, {
        sequelize,
        tableName: 'directors',
        paranoid: true,
    })

    return Directors;
}