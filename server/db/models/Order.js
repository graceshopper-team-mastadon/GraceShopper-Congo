const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
    state: {
        type: Sequelize.ENUM({
            values: [CART, PROCESSING, COMPLETED]
        })
    },
    date: {},
    shippingInfo: {},
    paymentInfo: {}
});

module.exports = Order
