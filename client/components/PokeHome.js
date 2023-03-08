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
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { authTrue, authFalse } from "../slices/authSlice";
import { searchProduct } from "../slices/productsSlice";

const PokeHome = () => {
  const navigate = useNavigate()
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    fontFamily: "optima",
    color: "steelblue",
  };
  const sideStyle = {
    margin: "1rem",
    textDecoration: "none",
    fontFamily: "optima",
    color: "steelblue",
  };
  const [searchOptions, setSearchOptions] = useState('')
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const loggedInStatus = async () => {
      const status = await axios.get("/auth/verify");
      if (status.data) {
        dispatch(authTrue());
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        dispatch(authFalse());
      }
    };
    const adminStatus = async () => {
      const { data } = await axios.get("/api/users/checkadmin");
      setIsAdmin(data);
    };
    loggedInStatus();
    adminStatus();
  }, [auth]);

  const formSubmit = async (e) => {
    e.preventDefault()
await dispatch(searchProduct(searchOptions));
navigate('/search')
  }
  return (
    <div>
      <Navbar className="navbar navbar-fixed-bottom bg-light">
        <Container>
          <Link to="/" style={linkStyle}>
            PokeHome
          </Link>
          <Form className="navbar bg-light" onSubmit={formSubmit} >
            <FormGroup>
              <FormControl type="text" placeholder="Search" value={searchOptions} onChange={(e) => setSearchOptions(e.target.value)} />
            </FormGroup>
            <Button variant="outline-secondary" type="submit" >
              Submit
            </Button>
          </Form>
          <Link to="/cart" style={linkStyle}>
            Cart
          </Link>
          {!loggedIn ? (
            <>
              <Link to="/login" style={linkStyle}>
                Login
              </Link>
              <Link to="/signup" style={linkStyle}>
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link to="" style={linkStyle} onClick={handleShow}>
                Account
              </Link>
              <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Account</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <Link to="/profile" style={sideStyle}>
                        Profile{" "}
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to="/order-history" style={sideStyle}>
                        Order History{" "}
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to="/payment-cards" style={sideStyle}>
                        Payment Cards
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to="/feedback" style={sideStyle}>
                        Send us Feedback
                      </Link>
                    </ListGroup.Item>
                    {isAdmin && (
                      <>
                        <ListGroup.Item>
                          <Link to="/dashboard" style={sideStyle}>
                            Dashboard
                          </Link>
                        </ListGroup.Item>
                      </>
                    )}
                    <ListGroup.Item>
                      <Link to="/signout" style={sideStyle}>
                        Sign Out
                      </Link>
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
