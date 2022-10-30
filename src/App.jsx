// import logo from './logo.svg';
import Home from './components/pages/home.jsx'
import GamePage from './components/pages/gamePage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { collection, onSnapshot, query } from 'firebase/firestore'
import { useState } from 'react'
import { db } from './firestore'

function App() {
  const [games, setGames] = useState([])
  const gamesArray = []
  const q = query(collection(db, 'games'))
  onSnapshot(q, querySnapshot => {
    querySnapshot.forEach(doc => {
      console.log(doc.id)
      console.log(doc.data())
      const gameData = {
        keyName: doc.id,
        ...doc.data(),
      }
      gamesArray.push(gameData)
    })
    setGames(gamesArray)
  })

  
  
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
