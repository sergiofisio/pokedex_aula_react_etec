import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../components/title";
import PokemonDetailInfo from "../../components/pokemonDetailInfo";

export default function PokemonDetails() {
  const params = useParams();
  const { id } = params;
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    async function getPokemonDetails() {
      const pokemonData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon(pokemonData.data);
    }

    getPokemonDetails();
  }, []);

  return (
    <>
      <Title text={pokemon?.name} />
      <PokemonDetailInfo pokemon={pokemon} />
    </>
  );
}
