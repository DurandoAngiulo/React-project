import GameCard from "../GameCard/gameCard.jsx";
import { useContext, useState } from "react";
import StateContext from "../../store.jsx";
const GameShop = () => {
  const state = useContext(StateContext);
  return (
    <div className="d-flex  justify-content-between row row-cols-md-2 row-cols-md-4 row-cols-xl-6">
      {state.gameData.map((game) => (
        <div className="col mx-1" key={game.name}>
          <div className="container p-0  mt-5">
            <div className="col-auto">
              <GameCard
                name={game.name}
                price={game.price}
                source={game.gameImage}
                url={game.url}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default GameShop;
