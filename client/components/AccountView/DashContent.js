import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import { fetchSingleUser } from "../../slices/userSlice";

const DashContent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.singleUser);

  console.log("user is --> ", user);

  useEffect(() => {
    dispatch(fetchSingleUser());
  }, []);

  return (
    <>
      <div>
        <h2>Welcome, {user.username}!</h2>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "50vh" }}
        >
          <div className="w-100" style={{ maxWidth: "200px" }}>
            <Card>
              <Card.Body>
                <Link to="/dashboard/users">Manage Users</Link>
              </Card.Body>
            </Card>
            <br />
            <Card>
              <Card.Body>
                <Link to="/dashboard/products">Manage Products</Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashContent;
