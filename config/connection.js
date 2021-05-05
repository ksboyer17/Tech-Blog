const Sequelize = require('sequelize');
const mysql = require('mysql');

require('dotenv').config();
// create connection to our db

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize("techblog_db","root","Milo411.", {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

    module.exports = sequelize;