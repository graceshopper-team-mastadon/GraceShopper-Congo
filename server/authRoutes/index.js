const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { User } = require("../db");

router.post("/login", async (req, res, next) => {
  try {
    res.cookie("token", await User.authenticate(req.body));
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
router.get("/verify", async (req, res, next) => {
  try {
    if (await User.Verify(req.cookies)) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});
router.post("/signup", async (req, res, next) => {
  try {
    await User.create(req.body);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
