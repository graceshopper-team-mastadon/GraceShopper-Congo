const db = require('./db');
const Order = require("./models/Order");
const OrderProduct = require("./models/OrderProduct");
const Product = require("./models/Product");
const User = require("./models/User");

// Old version 
// OrderProduct.belongsTo(Product);
// Product.hasMany(OrderProduct);

// OrderProduct.belongsTo(Order);
// Order.hasMany(OrderProduct);

Product.belongsToMany(Order, {through: OrderProduct})
Order.belongsToMany(Product, {through: OrderProduct})

Order.belongsTo(User);
User.hasMany(Order)

module.exports = {
    db,
    models: {
        Order,
        OrderProduct,
        Product,
        User
    }
}