import React, { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   try {
  //     setError("");
  //     setLoading(true);
  //     await logIn(emailRef.current.value, passwordRef.current.value);
  //     navigate("/");
  //   } catch {
  //     setError("Failed to login");
  //     setLoading(false);
  //   }
  // }
  return (
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {/* {currentUser.email} */}
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <Form>
            <Form.Group id="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" required></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required></Form.Control>
            </Form.Group>
            <Button className="w-100" type="submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
