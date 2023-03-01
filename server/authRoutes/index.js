const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../db/models/User')

router.post('/login', async (req, res, next) => {
    try {
res.cookie('token', await User.authenticate(req.body))
res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.get('/verify', async (req, res, next) => {
    try {
    await User.Verify(req.cookies)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})




module.exports = router