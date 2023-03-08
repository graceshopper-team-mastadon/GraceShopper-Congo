import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrderHistory } from "../../slices/cartSlice";

const OrderHistory = () => {
  const dispatch = useDispatch();

  const orders = useSelector((state) => state.cart.orderHistory);
  console.log("orders --> ", orders);
  const firstOrder = orders[0];
  console.log("firstOrder--> ", firstOrder);

  useEffect(() => {
    dispatch(getOrderHistory());
  }, []);

  return (
    <>
      <div>
        <h1> this is orderhistory lol </h1>
      </div>
    </>
  );
};
export default OrderHistory;
