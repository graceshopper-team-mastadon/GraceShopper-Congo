const router = require("express").Router();
const { OrderProduct, Product, User, Order } = require("../db");

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

// add UserId to state?
router.post("/", async (req, res, next) => {
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
      const updatedCartItem = await itemExists.increment("count", { by: 1 });
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

module.exports = router;
