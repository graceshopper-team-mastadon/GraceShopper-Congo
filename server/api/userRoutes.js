const router = require("express").Router();
const { User } = require("../db");

//should be an admin only function
// router.get('/:id', async (req, res, next) => {
//     try {
//         const user = await User.findByPk(req.params.id);
//         res.send(user)
//     }
//     catch (err) {
//         next(err)
//     }
// })

router.put('/:id', async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id);
        res.send(await user.update(req.body))
    } catch (err) {
        next(err)
    }
})

router.get('/checkadmin', async (req, res, next) => {
    try {
        console.log('hello there');
        console.log("req.cookies", req.cookies.token)
        const adminStatus = await User.isAdmin(req.cookies.token);
        res.send(adminStatus)
    }
    catch (err) {
        next(err)
    }
})

module.exports = router