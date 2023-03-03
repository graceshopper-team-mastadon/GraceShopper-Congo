const router = require("express").Router();
const { OrderProduct, Product, User, Order } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const id = await User.getId(req.cookies);
    console.log("id is:", id);
    const user = await User.findByPk(id, {
      include: [Order],
    });
    console.log("user is:", user.addOrder);
    // const cart = await Order.create();
    // await user.addOrder(cart);
    // console.log("cart is:", cart);

    const cart = await Order.findOrCreate({
      where: { userId: id, state: "CART" },
    });
    console.log("cart is:", cart);
    res.send(cart);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const id = req.body.id;
    // if findOrCreate --> another line to check quantity  ++
    const newOrderProduct = await OrderProduct.findOrCreate({
      include: [
        {
          model: Product,
          where: {
            productId: id,
          },
        },
      ],
    });
    //   console.log(newOrderProduct)
    res.send(newOrderProduct);
  } catch (err) {
    //   console.log(err)
    //   res.json(err);
    next();
  }
});

module.exports = router;
