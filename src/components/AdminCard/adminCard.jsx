import "../../index.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import StateContext from "../../store";

const AdminCard = ({ game }) => {
  const state = useContext(StateContext);
  const {
    name,
    price,
    publisher,
    rating,
    url,
    gameImage,
    banner,
    description,
    keyName,
  } = game;

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(name);
  const [gamePrice, setPrice] = useState(price);
  const [gamePublisher, setPublisher] = useState(publisher);
  const [gameRating, setRating] = useState(rating);
  const [gameUrl, setUrl] = useState(url);
  const [gameSource, setSource] = useState(gameImage);
  const [gameBanner, setBanner] = useState(banner);
  const [gameDescription, setDescription] = useState(description);
  const handleClose = () => setShow(false);
  const saveInfo = () => {
    let updatedGame = { ...game };
    updatedGame.name = title;
    updatedGame.price = gamePrice;
    updatedGame.publisher = gamePublisher;
    updatedGame.rating = gameRating;
    updatedGame.url = gameUrl;
    updatedGame.gameImage = gameSource;
    updatedGame.banner = gameBanner;
    updatedGame.description = gameDescription;
    state.sendChanges(updatedGame);
    handleClose();
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className="darkgrey">
        <Card.Body>
          <Card.Title className=" fs-4 red">{name}</Card.Title>
          <Card.Subtitle className="text-white mt-2">Price</Card.Subtitle>
          <Card.Text className="grey">{price}</Card.Text>
          <Card.Subtitle className="text-white">Publisher</Card.Subtitle>
          <Card.Text className="grey">{publisher}</Card.Text>
          <Card.Subtitle className="text-white">Rating</Card.Subtitle>
          <Card.Text className="grey">{rating}</Card.Text>
          <Card.Subtitle className="text-white">Url link</Card.Subtitle>
          <Card.Text className="grey">{url}</Card.Text>
          <Card.Subtitle className="text-white">
            Game Image Url Source
          </Card.Subtitle>
          <Card.Text className="grey">{gameImage}</Card.Text>
          <Card.Subtitle className="text-white">
            Banner Image Url Source
          </Card.Subtitle>
          <Card.Text className="grey">{banner}</Card.Text>
          <Card.Subtitle className="text-white">Description</Card.Subtitle>
          <Card.Text className="grey">{description}</Card.Text>
          <Button
            type="button"
            variant="danger"
            className="btn text-white background-red"
            onClick={handleShow}
          >
            Edit
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Game</Modal.Title>
        </Modal.Header>
        <Form className="p-3">
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder={name}
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder={price}
              value={gamePrice}
              onChange={(event) => {
                console.log("test");
                setPrice(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPublisher">
            <Form.Label>Publisher</Form.Label>
            <Form.Control
              type="text"
              placeholder={publisher}
              value={gamePublisher}
              onChange={(event) => {
                setPublisher(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRating">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="text"
              placeholder={rating}
              value={gameRating}
              onChange={(event) => {
                setRating(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formUrl">
            <Form.Label> Game Url</Form.Label>
            <Form.Control
              type="text"
              placeholder={url}
              value={gameUrl}
              onChange={(event) => {
                setUrl(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSource">
            <Form.Label>Game Image Source Url</Form.Label>
            <Form.Control
              type="text"
              placeholder={gameImage}
              value={gameSource}
              onChange={(event) => {
                setSource(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBanner">
            <Form.Label>Banner Image Source Url</Form.Label>
            <Form.Control
              type="text"
              placeholder={banner}
              value={gameBanner}
              onChange={(event) => {
                setBanner(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder={description}
              value={gameDescription}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </Form.Group>
          <Button
            type="button"
            variant="danger"
            className="btn text-white background-red"
            onClick={saveInfo}
          >
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default AdminCard;
