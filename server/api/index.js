const express = require('express')
const router = express.Router()

router.use('/products', require('./productsRoutes'))

module.exports = router