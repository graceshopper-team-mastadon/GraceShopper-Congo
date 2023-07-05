import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartUpdate } from "../slices/cartSlice";
import { ListGroup } from "react-bootstrap";
import CategoryBar from "./CategoryBar";
import { Link } from "react-router-dom";
const axios = require("axios");

let total = 0;
let totalPrice = 0;
const GuestCart = () => {
  const cart = useSelector((state) => state.cart.guestCart);
  const dispatch = useDispatch();

  const totalItems = async (data) => {
    for (let i = 0; i < data.length; i++) {
      total += data[i].quantity;
      totalPrice += data[i].price * data[i].quantity;
    }
  };

  useEffect(() => {
    total = 0;
    totalPrice = 0;
    const blah = async () => {
      const { data } = await axios.get("/auth/guestCart");
      dispatch(cartUpdate(data));
      totalItems(data);
    };
    blah();
  }, []);

  const handleRemove = async (poke) => {
    const id = Number(poke.id);
    await axios.delete(`/auth/guestCart/${id}`);
    const { data } = await axios.get("/auth/guestCart");
    dispatch(cartUpdate(data));
    total = 0;
    totalPrice = 0;
    totalItems(data);
  };

  return (
    <div
      className="container flex-column p-2 cart"
      style={{ marginTop: "2vw" }}
    >
      <div>
        {cart.length > 0 ? (
          <div>
            <CategoryBar category="Guest Cart" />
            <h3
              style={{ paddingTop: "40px" }}
            >{`Total Price: ${totalPrice}, Total Items: ${total}`}</h3>
            <ListGroup>
              {cart.map((pokemon) => {
                return (
                  <div
                    class="container flex-column p-2"
                    style={{ marginTop: "2vw" }}
                  >
                    <ListGroup.Item key={pokemon.id}>
                      <h4>{pokemon.name}</h4>
                      <p></p>
                      <p>
                        Price: ${pokemon.price * pokemon.quantity} Quantity:{" "}
                        {pokemon.quantity}
                      </p>
                      <img className="pokemonImg" src={pokemon.imageUrl}></img>
                      <div style={{ paddingTop: "10px" }}>
                        <button onClick={() => handleRemove(pokemon)}>
                          Remove from cart
                        </button>
                      </div>
                    </ListGroup.Item>
                  </div>
                );
              })}
            </ListGroup>
          </div>
        ) : (
          <div>
            <CategoryBar category="Guest Cart" />
            <div style={{ paddingTop: "40px" }}>Nothing in cart</div>
          </div>
        )}

        <div style={{ marginTop: "2vw" }}>
          <Link to="/payment" state={{ cart: cart, totalPrice: totalPrice }}>
            <button className="homebutton" variant="success">
              Checkout!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuestCart;
