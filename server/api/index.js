const express = require("express");
const router = express.Router();

router.use("/products", require("./productsRoutes"));
router.use('/cart',  require('./cartRoutes'))
router.use('/order',  require('./orderRoutes'));

module.exports = router;
