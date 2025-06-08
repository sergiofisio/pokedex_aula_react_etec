import { useEffect, useState } from "react";
import "./pokemons.css";
import axios from "axios";
import PokemonCard from "../../components/pokemonCard";
import Subtitle from "../../components/subtitle";
import Title from "../../components/title";

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  async function fetchPokemons() {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=50"
      );

      // console.log({ response });
      setPokemons(response.data.results);
    } catch (error) {}
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      <Title text="Conheça os Pokémons" />
      <Subtitle text="Navegue e veja detalhes incríveis de cada Pokémon." />
      <section className="pokemons">
        {pokemons.map((pokemon, key) => {
          return <PokemonCard key={key} pokemon={pokemon} />;
        })}
      </section>
    </>
  );
}
