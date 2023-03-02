import React from "react";
import {
  FormGroup,
  FormControl,
  Button,
  Form,
  Navbar,
  Nav,
  NavLink,
  Container,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import { Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PokeHome = () => {
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let navigate = useNavigate();

  useEffect(() => {
    const thing = async () => {
      const { data } = await axios.get('./auth/verify');
      console.log('data', data)
      setLoggedIn(data);
    };
    thing();
    navigate('/')
  }, [])

  return (
    <div>
      <Navbar className="navbar navbar-fixed-bottom bg-light">
        <Container>
          <Navbar.Brand href="/">PokeHome</Navbar.Brand>
          <Form className="navbar bg-light">
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>

          <Link to="/cart">Cart</Link>
          {!loggedIn ?
            <> <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link> </> : <>
              <Nav.Link href="" onClick={handleShow}>Account</Nav.Link>
              <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Account</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ListGroup>
                    <ListGroup.Item><Nav.Link href="/profile">Profile </Nav.Link></ListGroup.Item>
                    <ListGroup.Item>Order History</ListGroup.Item>
                    <ListGroup.Item>Address Book</ListGroup.Item>
                    <ListGroup.Item>Payment Cards</ListGroup.Item>
                    <ListGroup.Item>Send us Feedback</ListGroup.Item>
                  </ListGroup>
                </Offcanvas.Body>
              </Offcanvas></>}

        </Container>
      </Navbar>
    </div>
  );
};
export default PokeHome;
