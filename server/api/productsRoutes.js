const router = require("express").Router();
const {
  models: { Product },
} = require("../db/index.js");

// all routes begin with /api

// GET /api/products

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(campuses);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
