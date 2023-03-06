const router = require("express").Router();
const { OrderProduct, Product, User, Order } = require("../db");

// PRODUCTS

// Add product

// Edit product

// Delete product

router.get("/products/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

router.delete("/products/:id", async (req, res, next) => {
  try {
    const deletedProduct = await Product.findByPk(req.params.id);
    await deletedProduct.destroy();
    res.send(deletedProduct);
  } catch (err) {
    next(err);
  }
});

// USERS

// Add user

// Edit user

// Delete user

router.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

router.delete("/users/:id", async (req, res, next) => {
  try {
    const deletedUser = await User.findByPk(req.params.id);
    await deletedUser.destroy();
    res.send(deletedUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
