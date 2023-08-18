import Pokemon from "./Pokemon";

const ListPokemon = (props) => {
  const { pokemonList } = props;
  console.log("pokemonList", pokemonList);
  return (
    <div className="pokemonList">
      {pokemonList.map((pokemonObj) => (
        <Pokemon key={crypto.randomUUID()} pokemonObj={pokemonObj} />
      ))}
    </div>
  );
};

export default ListPokemon;