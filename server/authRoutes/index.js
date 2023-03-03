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
router.get('/id', async (req, res, next) => {
  try {
    console.log(req.cookies.token)
  const id = User.getId(req.cookies)
  res.send(id)
  } catch (err) {
    const errMsg = Error('bad token')
    errMsg.status = 401
    throw errMsg
  }
})
router.post("/signup", async (req, res, next) => {
  try {
    await User.create(req.body);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
router.delete('/logout', async (req, res, next) => {
  req.clearCookies()
})

module.exports = router;
