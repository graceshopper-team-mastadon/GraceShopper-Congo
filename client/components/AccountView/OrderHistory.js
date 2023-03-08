import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrderHistory } from "../../slices/orderHistorySlice";

const OrderHistory = () => {
  const dispatch = useDispatch();

  const orders = useSelector((state) => state.cart.orderHistory);
  console.log("orders --> ", orders);
  const firstOrder = orders[0];
  console.log("firstOrder--> ", firstOrder);
  // const firstOrderProduct = firstOrder[state];
  // console.log("firstOrderProduct--> ", firstOrderProduct);

  useEffect(() => {
    dispatch(getOrderHistory());
  }, []);

  if (orders.length === 0) {
    return <div>This is Loading</div>;
  } else
    return (
      <>
        <div>
          <h1> {orders[0].dataValues} </h1>
        </div>
      </>
    );
};
export default OrderHistory;
