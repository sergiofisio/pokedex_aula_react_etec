import "./App.css";
import Header from "./components/header";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Pokemons from "./pages/pokemons";
import Contato from "./pages/contato";
import PokemonDetails from "./pages/pokemon";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <main
        className={
          location.pathname !== "/" ? "background-opacity" : "background"
        }
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
