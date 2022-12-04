import "../../index.css";
import Card from "react-bootstrap/Card";
import "./cartGame.css";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import { useContext, useState } from "react";
import StateContext from "../../store.jsx";

const CartGame = ({ name, price, source, url, amount }) => {
  return (
    <Card className="noBg border-0 me-2" style={{ width: "12rem" }}>
      <LinkContainer to={`/game/${url}`}>
        <Card.Img className="rounded-2" variant="top" src={source} />
      </LinkContainer>
      <Card.Body className="p-0 pt-2 noBg">
        <h4 className="fs-6 text-white">{name}</h4>
        <p className="text-white mb-0">{price}</p>
        <span className="text-white">x{amount}</span>
      </Card.Body>
    </Card>
  );
};

export default CartGame;
