import React from "react";
import { useSelector } from "react-redux";

const GuestCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div>
      <div>
        {cart.length > 0 ? (
          <div>
            <h1>Cart</h1>
            <h3>Total Price: $10, Total Items: 100 items</h3>
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
                      <button>Remove from cart</button>
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
