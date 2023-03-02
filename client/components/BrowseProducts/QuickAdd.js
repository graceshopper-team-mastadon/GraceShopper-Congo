import React from "react";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../slices/productsSlice";

const QuickAdd = (props) => {
  const { productId } = props;
  const { price } = props;

  const dispatch = useDispatch();

  const quickAddHandler = async (productId, price) => {
    await dispatch(AddToCart({ productId, price }));
  };

  return (
    <button onClick={() => quickAddHandler(productId, price)}>
      Quick Add To Cart
    </button>
  );
};

export default QuickAdd;
