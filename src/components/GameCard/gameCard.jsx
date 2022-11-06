import "../../index.css";
import Card from "react-bootstrap/Card";
import "./gameCard.css";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import { useContext, useState } from "react";
import StateContext from "../../store.jsx";

const GameCard = ({ name, price, source, url }) => {
  return (
    <Card className="noBg border-0" style={{ width: "12rem" }}>
      <LinkContainer to={`/game/${url}`}>
        <Card.Img className="rounded-2" variant="top" src={source} />
      </LinkContainer>
      <Card.Body className="p-0 pt-2 noBg">
        <h4 className="fs-6 text-white">{name}</h4>
        <p className="text-white">{price}</p>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
