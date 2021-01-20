var path = require('path');
var Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.js'))[env];
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config)
module.exports.sequelize = sequelize
