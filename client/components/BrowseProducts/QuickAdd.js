import React from "react";
import { useDispatch } from "react-redux";
// import { AddToCart } from "../slices/productsSlice";

const QuickAdd = (props) => {
  const { productId } = props;

  const dispatch = useDispatch();

  const quickAddHandler = async (id) => {
    await dispatch(AddToCart(id));
  };

  return (
    <button onClick={() => quickAddHandler(productId)}>
      Quick Add To Cart
    </button>
  );
};

export default QuickAdd;
