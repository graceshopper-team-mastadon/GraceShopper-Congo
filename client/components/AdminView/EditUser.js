import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { editUser } from "../../slices/userSlice";

const EditUser = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = location.state.item;

  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [role, setRole] = useState(user.role);
  // console.log("user is -->", user);
  // console.log("name is -->", user.name);

  const handleSubmit = async function handleSubmit(e) {
    e.preventDefault();
    const id = user.id;
    console.log("role--> ", role);
    dispatch(editUser({ id, name, username, email, address, role }));
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <Card.Title>Edit User</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Role</Form.Label>
                <Form.Control
                  type="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                ></Form.Control>
              </Form.Group>
              <Button variant="success" className="w-100" type="submit">
                Confirm Edits
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Link to="/dashboard">Back to Dashboard</Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default EditUser;
