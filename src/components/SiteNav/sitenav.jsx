import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./SiteNav.css";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import cart from "../../cart.png";
import Badge from "react-bootstrap/Badge";
import { useContext, useState } from "react";
import StateContext from "../../store.jsx";

function SiteNav() {
  const state = useContext(StateContext);
  return (
    <Navbar className="darkgrey shadow-small" fixed="top" expand="sm">
      <Container className="">
        <LinkContainer to="/">
          <Navbar.Brand
            className="fst-italic fw-semibold text-white"
            href="#home"
          >
            Game Ne<span className="red">x</span>us
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/admin">
              <Nav.Link className="grey fw-light">Admin</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/cart">
              <Nav.Link href="#deets" className="text-white">
                <span>Cart</span>
                <img
                  src={cart}
                  width="30"
                  height="30"
                  className="align-middle"
                  style={{ filter: "invert(1)" }}
                  alt="cart"
                />{" "}
                <Badge bg="secondary">
                  {state.userCart
                    .map((item) => item.in_cart)
                    .reduce((sum, curr) => sum + curr, 0)}
                </Badge>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SiteNav;
