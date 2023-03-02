const router = require("express").Router();
const Product = require("../db/models/Product");
const OrderProduct = require("../db/models/OrderProduct");

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
// router.get("/category/:category", async (req, res, next) => {
//   try {
//     const products = await Product.findAll({
//       where: {},
//     });
//     res.send(products);
//   } catch (err) {
//     next(err);
//   }
// });

//get singular product by id
router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(product);
  } catch (err) {
    next(err);
  }
});

//this should be an ADMIN function to edit a product
router.put("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(await product.update(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
