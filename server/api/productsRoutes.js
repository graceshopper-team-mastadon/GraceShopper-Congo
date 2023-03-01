const router = require("express").Router();
const Product = require('../db/models/Product')

// GET /api/products
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (err) {
    next(err);
  }
});

// GET /api/products/:category
// Add where clause
router.get("/:category", async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: {},
    });
    res.send(products);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
