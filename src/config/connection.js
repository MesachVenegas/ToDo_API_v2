const { Sequelize } = require('sequelize');

const db = new Sequelize({
    port: 5432,
    host: 'localhost',
    database: 'task_dev',
    username: 'postgres',
    password: 'root',
    dialect: 'postgres'
})

module.exports = db;