import Layout from "../Layouts/layout.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { useContext, useState } from "react";
import StateContext from "../../store.jsx";
import { useParams } from "react-router-dom";
const GamePage = () => {
  const state = useContext(StateContext);
  const { id } = useParams();

  const game = state.gameData.find((game) => game.url === id);

  return (
    <Layout>
      <div className="px-5">
        <div className="d-flex justify-content-center mt-2 flex-wrap ">
          <div className="row mt-5 max-width">
            <div className="col-12">
              <img
                className="img-fluid rounded-1 top-spacer"
                src={game.banner}
                alt="gameimage"
              ></img>
            </div>
            <div className="col-12 col-lg-7 mt-4">
              <div className="">
                <h1 className="text-white text-center text-lg-start">
                  {game.name}
                </h1>
              </div>
              <p className="text-white text-center text-lg-start">
                {game.publisher}
              </p>
              <p className="text-white text-center text-lg-start">
                {game.rating}
              </p>
              <h4 className="text-white text-center text-lg-start">
                {game.price}
              </h4>
              <div className="d-flex justify-content-center justify-content-lg-start my-1">
                <button type="button" className="btn text-white background-red">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="col-12  col-lg-5 d-flex  justify-content-center justify-content-lg-end mt-4">
              <img
                className="rounded-1 width-40 d-block"
                src={game.gameImage}
                alt="game"
              ></img>
            </div>
            <div className="col-12 justify-content-start my-5">
              <p className="text-white">{game.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GamePage;
