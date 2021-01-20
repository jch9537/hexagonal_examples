var path = require('path');
module.exports = {
  development: {
    dialect: 'sqlite',
    storage: path.join(__dirname, '..', 'db', 'dev-db.sql')
  },
  test: {
    dialect: 'sqlite',
    storage: path.join(__dirname, '..', 'db', 'dev-db.sql')
  },
  production: {
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: 'ebdb',
    port: process.env.RDS_PORT,
    host: process.env.RDS_HOSTNAME,
    dialect: 'mysql'
  }
};
