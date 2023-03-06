import React from "react";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../slices/cartSlice";
const axios = require("axios");

const QuickAdd = (props) => {
  const { product } = props;

  const dispatch = useDispatch();

  const quickAddHandler = async (productInfo) => {
    // await axios.post('/auth/guestCart')
    await axios.get("/api/cart");
    await dispatch(AddToCart(productInfo));
  };

  return (
    <button onClick={() => quickAddHandler(product)}>Quick Add To Cart</button>
  );
};

export default QuickAdd;
