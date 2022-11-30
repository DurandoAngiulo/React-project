// import logo from './logo.svg';
import Home from "./components/pages/home.jsx";
import Admin from "./components/pages/admin.jsx";
import GamePage from "./components/pages/gamePage.jsx";
import Cart from "./components/pages/cart.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useState, useContext, useEffect } from "react";
import { db } from "./firestore";
import StateContext from "./store";

function App() {
  const state = useContext(StateContext);
  // const [games, setGames] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "games"));
    onSnapshot(q, (querySnapshot) => {
      const gamesArray = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id);
        console.log(doc.data());
        const gameData = {
          keyName: doc.id,
          ...doc.data(),
        };
        gamesArray.push(gameData);
      });
      state.setGameData(gamesArray);
      state.initalizeCart();
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
