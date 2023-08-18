import "./App.css";
import ListPokemonPage from "./pages/ListPokemonPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<ListPokemonPage />} />
          <Route path="/pokemon/:pokemonId" element={<PokemonDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;