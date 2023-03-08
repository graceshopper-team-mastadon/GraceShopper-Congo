const router = require("express").Router();
const { OrderProduct, Product, User, Order } = require("../db");

router.get("/order-history", async (req, res, next) => {
  try {
    console.log("cookies ", req.cookies.token);
    const UserId = await User.getId(req.cookies.token);
    console.log("UserId --> ", UserId);
    const orders = await Order.findAll({
      where: { userId: UserId, state: "COMPLETED" },
      include: { model: Product },
    });
    console.log("orders-->", orders);
    res.send(orders);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
