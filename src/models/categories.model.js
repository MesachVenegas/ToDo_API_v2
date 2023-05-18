const { DataTypes } = require('sequelize');
const db = require('../config/connection');


const Category = db.define('categories', {
    category: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
},{
    timestamps: false,
})

module.exports = Category;