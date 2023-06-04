'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Reviewers extends Model {

    }
    Reviewers.init({
        revName: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
    }, {
        sequelize,
        tableName: 'reviewers',
        paranoid: true,
    })

    return Reviewers;
}