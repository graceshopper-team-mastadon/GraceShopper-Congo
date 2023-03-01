const db = require('./db');
const Order = require("./models/Order");
const OrderProduct = require("./models/OrderProduct");
const Product = require("./models/Product");
const User = require("./models/User");


OrderProduct.belongsTo(Product);
Product.hasMany(OrderProduct);

OrderProduct.belongsTo(Order);
Order.hasMany(OrderProduct);

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