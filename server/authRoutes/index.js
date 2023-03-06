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
    if (!req.cookies.token) {
      res.send(false);
    } else if (await User.Verify(req.cookies)) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});
router.get("/getId", async (req, res, next) => {
  try {
    const id = await User.getId(req.cookies.token);
    res.json(id);
  } catch (err) {
    const errMsg = Error("bad token");
    errMsg.status = 401;
    throw errMsg;
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


router.get('/logout', async (req, res, next) => {
  res.clearCookie('token')
  res.end()
})


module.exports = router;
