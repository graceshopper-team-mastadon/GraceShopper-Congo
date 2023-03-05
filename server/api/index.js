const express = require("express");
const router = express.Router();

router.use("/products", require("./productsRoutes"));
router.use("/cart", require("./cartRoutes"));
router.use("/order", require("./orderRoutes"));
router.use("/users", require("./userRoutes"));
router.use("/admin", require("./adminRoutes"));

module.exports = router;
