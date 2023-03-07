import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const handleSubmit = async function handleSubmit(e) {
    e.preventDefault();
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <h3>Add User Page</h3>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
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
            </Form>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default AddUser;
