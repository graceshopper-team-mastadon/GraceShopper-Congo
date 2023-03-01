// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { getCart, removeFromCart } from "../reducers/cartSlice";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart.allItems);

//   useEffect(() => {
//     dispatch(getCart());
//   }, []);

//   const handleRemove = async (id) => {
//     await dispatch(removeFromCart(id));
//   };

//   if (!cart[0]) {
//     return <h2>Oops, looks like your cart is empty</h2>;
//   }

//   const totalPrice = () => {
//     let price = 0;
//     cart.map((item) => {
//       price += item.price;
//     });

//     return price;
//   };

//   return (
//     <div>
//       <h2>Cart</h2>
//       <p>
//         ${totalPrice()} -{cart.length} items{" "}
//       </p>
//       <ul>
//         {cart.map((item) => {
//           return (
//             <li key={item.id}>
//               <h2>
//                 <Link to={`/items/${item.id}`}>{item.name}</Link>
//               </h2>
//               <p>{item.price}</p>
//               <img src={item.imageUrl}></img>
//               <div>
//                 <button onClick={() => handleRemove(item.id)}>
//                   Remove item
//                 </button>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Cart;
