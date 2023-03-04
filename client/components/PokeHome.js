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
import { useSelector } from "react-redux"
import { useEffect } from "react";
import axios from "axios";

const PokeHome = () => {
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
    const loggedInStatus = async () => {
      const data = await axios.get('/auth/verify');
      setLoggedIn(data)
    };
    const adminStatus = async () => {
      const { data } = await axios.get('/api/users/checkadmin');
      setIsAdmin(data)
    };
    loggedInStatus();
    adminStatus();
  }, [auth]);

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
                    <ListGroup.Item><Nav.Link href="/order-history">Order History </Nav.Link></ListGroup.Item>
                    <ListGroup.Item><Nav.Link href="/address-book">Address Book </Nav.Link></ListGroup.Item>
                    <ListGroup.Item><Nav.Link href="/payment-cards">Payment Cards</Nav.Link></ListGroup.Item>
                    <ListGroup.Item><Nav.Link href="/feedback">Send us Feedback</Nav.Link></ListGroup.Item>
                    {isAdmin && <><ListGroup.Item><Nav.Link href="/dashboard">Dashboard</Nav.Link></ListGroup.Item> </>}
                    <ListGroup.Item><Nav.Link href="/signout">Sign Out</Nav.Link></ListGroup.Item>
                  </ListGroup>
                </Offcanvas.Body>
              </Offcanvas></>}
        </Container>
      </Navbar>
    </div>
  );
};
export default PokeHome;
