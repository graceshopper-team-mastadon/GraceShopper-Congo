const express = require("express");
const router = express.Router();
const morgan = require("morgan");

router.use(express.json());
router.use(morgan("dev"));
router.use(express.urlencoded({ extended: true }));

router.use("/products", require("./productsRoutes"));
router.use("/cart", require("./cartRoutes"));
router.use("/order", require("./orderRoutes"));
router.use("/users", require("./userRoutes"));
// router.use("/dashboard", require("./api/adminRoutes"));

module.exports = router;
