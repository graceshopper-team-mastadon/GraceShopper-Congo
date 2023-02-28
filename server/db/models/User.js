const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    address: {
        type: Sequelize.STRING
    },
    role: {
        type: Sequelize.ENUM({
            values: [ADMIN, MEMBER]
        })
    }
});

module.exports = User
