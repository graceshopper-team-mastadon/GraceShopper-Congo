const Sequelize = require('sequelize');
const db = require('../db');

const OrderProduct = db.define('orderProduct', {
    count: {
        type: Sequelize.INTEGER
    },
    price: {
        type: Sequelize.FLOAT
    }
});

//set up the relationships
//Sequelize will give us these: productId / orderId
//order and products have a one to many relationship

module.exports = OrderProduct
