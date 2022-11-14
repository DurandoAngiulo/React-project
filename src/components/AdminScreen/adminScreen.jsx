import AdminCard from "../AdminCard/adminCard.jsx";
import { useContext, useState } from "react";
import StateContext from "../../store.jsx";
const AdminScreen = () => {
  const state = useContext(StateContext);
  return (
    <div className="d-flex justify-content-between row row-cols-1 row-cols-md-2">
      {state.gameData.map((game) => (
        <div className="col-auto mt-2" key={game.name}>
          <AdminCard
            game={game}
            // name={game.name}
            // price={game.price}
            // publisher={game.publisher}
            // rating={game.rating}
            // url={game.url}
            // source={game.gameImage}
            // bannerImage={game.banner}
            // description={game.description}
            // keyName={game.keyName}
          />
        </div>
      ))}
    </div>
  );
};
export default AdminScreen;
