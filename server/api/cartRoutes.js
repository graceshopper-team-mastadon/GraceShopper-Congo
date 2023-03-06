const router = require("express").Router();
const { OrderProduct, Product, User, Order } = require("../db");

// Create or Access cart for logged in user
router.get("/", async (req, res, next) => {
  try {
    const UserId = await User.getId(req.cookies.token);
    const cart = await Order.findOrCreate({
      where: { userId: UserId, state: "CART" },
    });
    const orderProductInfo = await OrderProduct.findAll({
      where: { orderId: cart[0].id },
    });
    res.send(orderProductInfo);
  } catch (err) {
    next(err);
  }
});

// Add item to cart
router.post("/", async (req, res, next) => {
  try {
    const input = req.body.singleProduct;
    console.log("body is:", req.body);
    console.log("quantity is:", input.quantity);
    const UserId = await User.getId(req.cookies.token);
    const num = input.quantity;
    const cart = await Order.findOne({
      where: { userId: UserId },
    });
    const productId = input.singleProduct.id;
    const itemExists = await OrderProduct.findOne({
      where: {
        productId: productId,
        orderId: cart.id,
      },
    });
    if (itemExists) {
      console.log("item exists!!");
      const updatedCartItem = await itemExists.increment("count", {
        by: num,
      });
      res.send(updatedCartItem);
    } else {
      const product = await Product.findByPk(productId);
      const newCartItem = cart.addProduct(product);
      newCartItem.count = num;
      res.send(newCartItem);
    }
  } catch (err) {
    next(err);
  }
});

//Quick add
router.post("/quickadd", async (req, res, next) => {
  try {
    const UserId = await User.getId(req.cookies.token);
    const cart = await Order.findOne({
      where: { userId: UserId },
    });
    const productId = req.body.id;
    const itemExists = await OrderProduct.findOne({
      where: {
        productId: productId,
        orderId: cart.id,
      },
    });
    if (itemExists) {
      const updatedCartItem = await itemExists.increment("count", {
        by: 1,
      });
      res.send(updatedCartItem);
    } else {
      const product = await Product.findByPk(productId);
      const newCartItem = cart.addProduct(product);
      res.send(newCartItem);
    }
  } catch (err) {
    next(err);
  }
});

// Delete item from Cart
router.delete("/:id", async (req, res, next) => {
  try {
    const UserId = await User.getId(req.cookies.token);
    const cart = await Order.findOne({
      where: { userId: UserId },
    });
    const deletedCartItem = await OrderProduct.findOne({
      where: {
        productId: req.params.id,
        orderId: cart.id,
      },
    });
    await deletedCartItem.destroy();
    res.send(deletedCartItem);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
