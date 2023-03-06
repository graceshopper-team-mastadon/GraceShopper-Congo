import React from "react";
import { useDispatch } from "react-redux";
import { QuickAddToCart } from "../../slices/cartSlice";
import { Button } from "react-bootstrap";

const axios = require("axios");

const QuickAdd = (props) => {
  const { product } = props;

  const dispatch = useDispatch();

  const quickAddHandler = async (productInfo) => {
    // await axios.post('/auth/guestCart')
    await axios.get("/api/cart");
    await dispatch(QuickAddToCart(productInfo));
  };

  return (
    <Button variant="primary" onClick={() => quickAddHandler(product)}>Quick Add</Button>
  );
};

export default QuickAdd;
