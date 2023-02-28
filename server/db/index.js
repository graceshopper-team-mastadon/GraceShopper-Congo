// const Cart = require("./models/Cart");
const Order = require("./models/Order");
const OrderProduct = require("./models/OrderProduct");
const Product = require("./models/Product");
const User = require("./models/User");

OrderProduct.belongsTo(Product);
Product.hasMany(OrderProduct);

OrderProduct.belongsTo(Order);
Order.hasMany(OrderProduct);

Order.belongsTo(User);
User.hasMany(Order);

module.exports = {
    models: {
        Order,
        OrderProduct,
        Product,
        User
    }
}