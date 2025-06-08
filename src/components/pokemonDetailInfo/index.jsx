import "./pokemonDetail.css";

export default function PokemonDetailInfo({ pokemon }) {
  console.log({ pokemon });

  return (
    <section className="pokemonDetailInfo">
      <img
        src={pokemon?.sprites?.other.dream_world.front_default}
        alt={`img ${pokemon?.name}`}
      />
      <div>
        <h1>Tipos</h1>
        {pokemon?.types?.map((type, key) => {
          return (
            <div key={key} className={`type ${type.type.name}`}>
              <h2>{type.type.name}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
}
