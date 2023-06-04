'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Ratings extends Model {
        static associate(models) {
            Ratings.belongsTo(models.Movies, {
                foreignKey: 'movieId'
            });

            Ratings.belongsTo(models.Reviewers, {
                foreignKey: 'reviewId'
            });
        }
    }
    Ratings.init({
        revStars: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
    }, {
        sequelize,
        tableName: 'ratings',
        paranoid: true,
    })

    return Ratings;
}

