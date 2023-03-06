import React, { useEffect, useState } from "react";
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
  ListGroupItem,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { authTrue, authFalse } from "../slices/authSlice";

const PokeHome = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const auth = useSelector((state) => state.auth);
  // console.log(auth);

  useEffect(() => {
    const loggedInStatus = async () => {
      const status = await axios.get("/auth/verify")
      if (status.data) {
        dispatch(authTrue());
        setLoggedIn(true)
      }
      else {
        setLoggedIn(false)
        dispatch(authFalse())

      }
    };
    const adminStatus = async () => {
      const { data } = await axios.get("/api/users/checkadmin");
      setIsAdmin(data);
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
          {!loggedIn ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          ) : (
            <>
              <Link to="" onClick={handleShow}>
                Account
              </Link>
              <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Account</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <Link to="/profile">Profile </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to="/order-history">Order History </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to="/address-book">Address Book </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to="/payment-cards">Payment Cards</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to="/feedback">Send us Feedback</Link>
                    </ListGroup.Item>
                    {isAdmin && (
                      <>
                        <ListGroup.Item>
                          <Link to="/dashboard">Dashboard</Link>
                        </ListGroup.Item>
                      </>
                    )}
                    <ListGroup.Item>
                      <Link to="/signout">Sign Out</Link>
                    </ListGroup.Item>
                  </ListGroup>
                </Offcanvas.Body>
              </Offcanvas>
            </>
          )}
        </Container>
      </Navbar>
    </div>
  );
};
export default PokeHome;
