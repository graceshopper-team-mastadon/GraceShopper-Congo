import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSingleUser } from "../../slices/userSlice";

const DashContent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.singleUser);

  useEffect(() => {
    dispatch(fetchSingleUser());
  }, []);

  return (
    <>
      <div className="admin-dashboard">
        <div className="admin-header">Welcome, {user.username}!</div>
        <div className="user-table">
          <Link to="/dashboard/users">Manage Users</Link>
        </div>
        <div className="product-table">
          <Link to="/dashboard/products">Manage Products</Link>
        </div>
      </div>
    </>
  );
};

export default DashContent;
