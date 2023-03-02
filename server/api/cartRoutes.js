const router = require('express').Router();
const OrderProduct = require("../db/models/OrderProduct");
const User = require("../db/models/User");
const Order = require("../db/models/Order");
const Product = require("../db/models/Product");


// router.get('/', async (req, res, next) => {
//     try {
//     const id = await User.getId(req.cookies)
// const cart = await Order.findOrCreate({
//     where: {
//         userId: id
//     },
//     include: {
//         model: OrderProduct,
//     }
// })
// console.log(cart)
// res.send(cart)
//     } catch (err) {
//         next(err);
//     }
// })





// router.post("/", async (req, res, next) => {
//     try {
//         const id = req.body.id
//       const newOrderProduct = await OrderProduct.findOrCreate({
//         include: {
//             model: Product,
//             where: {
//                 productId: id,
//             }
//         },
//       });
//     //   console.log(newOrderProduct)
//       res.send(newOrderProduct);
//     } catch (err) {
//     //   console.log(err)
//     //   res.json(err);
//     next()
//     }
//   });

  
module.exports = router