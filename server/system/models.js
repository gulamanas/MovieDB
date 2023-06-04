'use strict';

const C = console.info;

const glob = require('glob')
const path = require('node:path');
const Sequelize = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const seqrc = require(path.join(__dirname, '../../.sequelizerc'));

const db = {};

const config = require(seqrc.config)

let sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, config);

glob.sync(path.join(__dirname, '../app/**/model.js')).forEach(function (file) {
	const model = require(path.resolve(file))(sequelize, Sequelize.DataTypes);
	// C(model)
	db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

// C(db)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;