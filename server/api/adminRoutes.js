const router = require("express").Router();
const { OrderProduct, Product, User, Order } = require("../db");

// PRODUCTS

// Add product

// Edit product

// Delete product

router.get("/products/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(product);
  } catch (err) {
    next(err);
  }
});

router.delete("/products/:id", async (req, res, next) => {
  try {
    await Product.destroy({
      where: { id: req.params.id },
    });
    res.end();
  } catch (err) {
    next(err);
  }
});

// USERS

// Add user

// Edit user

router.put("/users/:id", async (req, res, next) => {
  try {
    console.log("id--> ", req.body.id);
    const user = await User.findByPk(req.params.id);

    const editedUser = await user.update(req.body);
    res.send(editedUser);
    console.log("user --> ", editedUser);
  } catch (err) {
    next(err);
  }
});

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
    await User.destroy({
      where: { id: req.params.id },
    });
    res.end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
