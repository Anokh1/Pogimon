//import './App.css';
import Navbar from './Navbar';
import Pokemon from './pages/Pokemon'
import Home from './pages/Home'
import Digimon from './pages/Digimon'
import { Route, Routes } from "react-router-dom"
const cors = require("cors")

function App() {
  
  return(
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/digimon" element={<Digimon />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
