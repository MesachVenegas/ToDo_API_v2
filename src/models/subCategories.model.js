const { DataTypes } = require('sequelize');
const db = require('../config/connection');

const SubCategory = db.define('subcategories', {
    subCategory: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'sub_category'
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    timestamps: false,
})

module.exports = SubCategory;