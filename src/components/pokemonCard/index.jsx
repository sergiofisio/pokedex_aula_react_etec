import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pokemonCard.css";

export default function PokemonCard({ pokemon }) {
  const navigate = useNavigate();
  const [pokemonInfo, setPokemonInfo] = useState({});

  useEffect(() => {
    async function getPokemonInfo() {
      const response = await axios.get(pokemon.url);
      console.log({ response });

      setPokemonInfo(response.data);
    }

    getPokemonInfo();
  }, []);
  return (
    <div
      className="pokemonCard"
      onClick={() => navigate(`/pokemon/${pokemonInfo.id}`)}
    >
      <p>{pokemonInfo.id}</p>
      <img
        src={pokemonInfo?.sprites?.other.dream_world.front_default}
        alt={`img ${pokemonInfo.name}`}
      />
      <h2>{pokemonInfo.name}</h2>
    </div>
  );
}
