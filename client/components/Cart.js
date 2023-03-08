import React, { useEffect } from "react";
import GuestCart from "./GuestCart";
import { useSelector, useDispatch } from "react-redux";
import { Table, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllCart } from "../slices/cartSlice";
import { getAllProducts } from "../slices/productsSlice";
import { deleteSingleItem } from "../slices/cartSlice";
import { incrementItemCount } from "../slices/cartSlice";
import { decrementItemCount } from "../slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.auth);
  console.log("logged", logged);
  const cart = useSelector((state) => state.cart.cart);
  const products = useSelector((state) => state.products.Products);

  useEffect(() => {
    dispatch(getAllCart());
    dispatch(getAllProducts());
  }, []);

  if (logged === false) {
    return <GuestCart />;
  } else {
    const singleProduct = cart.map((element) => {
      return products.filter((elem) => elem.id === element.productId);
    });
    if (cart.length === 0 || singleProduct[0].length === 0) {
      return (
        <h2>
          Oops, looks like your cart is empty. To browse pokemon click{" "}
          <Link to={"/products"}>here</Link>
        </h2>
      );
    }

    const handleRemove = async (id) => {
      await dispatch(deleteSingleItem(id));
    };

    const handleIncrement = async (id) => {
      await dispatch(incrementItemCount(id));
    };

    const handleDecrement = async (id) => {
      await dispatch(decrementItemCount(id));
    };

    const calculatePrice = () => {
      let totalPrice = 0;

      singleProduct.map((item, index) => {
        totalPrice += item[0].price * cart[index].count;
      });
      return totalPrice;
    };
    const totalPrice = calculatePrice();

    const calculateTotalItems = () => {
      let totalItems = 0;

      cart.map((elem) => {
        totalItems += elem.count;
      });

      return totalItems;
    };
    return (
      <div>
        <h1>Cart</h1>
        <h3>
          Total Price: ${totalPrice}, Total Items: {calculateTotalItems()} items{" "}
        </h3>

        <ul>
          {singleProduct.map((pokemon, index) => {
            return (
              <li key={pokemon[0].id}>
                <h4>
                  <Link to={`/products/${pokemon[0].id}`}>
                    {pokemon[0].name}
                  </Link>
                </h4>
                <p></p>
                <p>
                  Price: ${pokemon[0].price * cart[index].count} Quantity:{" "}
                  {cart[index].count}
                </p>
                <img className="pokemonImg" src={pokemon[0].imageUrl}></img>
                <div>
                  <button onClick={() => handleIncrement(pokemon[0].id)}>
                    Add One
                  </button>
                  <button onClick={() => handleDecrement(pokemon[0].id)}>
                    Remove One
                  </button>
                  <button onClick={() => handleRemove(pokemon[0].id)}>
                    Remove from cart
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <div>
          <Link to="/payment" state={{ cart: cart, totalPrice: totalPrice }}>
            <Button variant="success">Checkout!</Button>
          </Link>
        </div>
      </div>
    );
  }
};

export default Cart;
