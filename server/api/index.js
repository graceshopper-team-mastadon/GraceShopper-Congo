const express = require("express");
const router = express.Router();

router.use("/products", require("./productsRoutes"));
// router.use("/cart", require("./cartRoutes"));

module.exports = router;
