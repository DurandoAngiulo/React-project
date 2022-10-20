import "../../index.css";
import Card from "react-bootstrap/Card";
import './gameCard.css';


const GameCard = ({ name, price, source, category }) => {
  return (
    <>
      <Card  className="noBg border-0" style={{ width: "12rem" }}>
        <Card.Img className= 'rounded-2'variant="top" src={source} />
        <Card.Body className="p-0 pt-2 noBg">
          <h4 className="fs-6 text-white">{name}</h4>
          <p className="text-white">{price}</p>
        </Card.Body>
      </Card>
    </>
  );
};

export default GameCard;