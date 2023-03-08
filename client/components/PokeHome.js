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
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "white",
  };

  const offCanvasStyle = {
    color: "Black",
    margin: "1rem",
    textDecoration: "none",
  };

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


  return (
    <div>
      <Navbar className="aboveBar">
        <Container>
          <Form className="navbar aboveBar aboveBarContent">
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
            <Button variant="outline-secondary" type="submit">
              Submit
            </Button>
          </Form>
          <Link className="aboveBarContent" to="/cart" style={linkStyle}>
            Cart
          </Link>
          {!loggedIn ? (
            <>
              <Link className="aboveBarContent" to="/login" style={linkStyle}>
                Login
              </Link>
              <Link className="aboveBarContent" to="/signup" style={linkStyle}>
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link to="" style={linkStyle} onClick={handleShow}>
                Account
              </Link>
              <Offcanvas show={show} onHide={handleClose} placement="end" >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Account</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ListGroup style={offCanvasStyle}>
                    <ListGroup.Item>
                      <Link to="/profile" style={offCanvasStyle}>
                        Profile{" "}
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to="/order-history" style={offCanvasStyle}>
                        Order History{" "}
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to="/payment-cards" style={offCanvasStyle}>
                        Payment Cards
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to="/feedback" style={offCanvasStyle}>
                        Send us Feedback
                      </Link>
                    </ListGroup.Item>
                    {isAdmin && (
                      <>
                        <ListGroup.Item>
                          <Link to="/dashboard" style={offCanvasStyle}>
                            Dashboard
                          </Link>
                        </ListGroup.Item>
                      </>
                    )}
                    <ListGroup.Item>
                      <Link to="/signout" style={offCanvasStyle}>
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


      <div className="logo">
        <img className="pokemonImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png?20161023215848" />
        <Link to="/" style={linkStyle}>
          PokeHome
        </Link>
      </div>
    </div>
  );
};
export default PokeHome;
