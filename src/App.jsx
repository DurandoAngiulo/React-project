// import logo from './logo.svg';
import Home from './components/pages/home.jsx'
import GamePage from './components/pages/gamePage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";


function App() {
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
