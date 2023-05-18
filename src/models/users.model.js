const { DataTypes } = require('sequelize');
const db = require('../config/connection');

const User = db.define('users', {
    userName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true,
        }
    }
},
{
    timestamps: false,
})

module.exports = User;