const { DataTypes } = require('sequelize');
const db = require('../config/connection');

const Task = db.define('tasks', {
    title: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'is_completed'
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        field: 'category_id'
    },
    subCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'sub_category_id'
    },
},{
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
})

module.exports = Task;