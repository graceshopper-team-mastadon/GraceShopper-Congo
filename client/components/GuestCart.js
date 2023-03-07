import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartUpdate } from "../slices/cartSlice";
const axios = require("axios");

const GuestCart = () => {
  const [total, setTotal] = useState(9)
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch()

//   const totalItems = async (data) => {
//     let totalitems = 0
//   for (let i = 0; i < data.length; i++) {
//   totalItems += data[i].quantity
// // setTotalPrice(totalPrice + (data[i].price * data[i].quantity))
//   }
//   setTotal(totalitems)
//   }

  useEffect(() => {
  const blah = async () => {
    const { data } = await axios.get("/auth/guestCart");
    dispatch(cartUpdate(data));
  };
  blah();
}, [])

  // const handleRemove = async (poke) => {
  //   const id = Number(poke.id)
  //   await axios.delete(`/auth/guestCart/${id}`)
  //   const { data } = await axios.get("/auth/guestCart");
  //   dispatch(cartUpdate(data));
  //   // setTotal(total - 1)
  // }


  return (
    <div>
      <div>
        {cart.length > 0 ? (
          <div>
            <h1>Cart</h1>
            {/* <h3>{`Total Price: $${totalPrice} Total Items: ${total}`}</h3> */}
            <ul>
              {cart.map((pokemon) => {
                return (
                  <li key={pokemon.id}>
                    <h4></h4>
                    <p></p>
                    <p>
                      Price: ${pokemon.price * pokemon.quantity} Quantity:
                      {pokemon.quantity}
                    </p>
                    <img src={pokemon.imageUrl}></img>
                    <div>
                      <button onClick={() => handleRemove(pokemon)} >Remove from cart</button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div>Nothing in cart</div>
        )}
      </div>
    </div>
  );
};

export default GuestCart;
