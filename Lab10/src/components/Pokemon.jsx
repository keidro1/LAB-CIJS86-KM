import { Link } from "react-router-dom";

const Pokemon = (props) => {
  const { pokemonObj } = props;

  const pokemonId = pokemonObj.url.split("/").at(-2);

  return (
    <div className="pokemon">
      <h3 className="pokemon-name">
        #{pokemonId} {pokemonObj.name}
      </h3>
      <button>
        <Link to={`/pokemon/${pokemonId}`}>View detail</Link>
      </button>
    </div>
  );
};

export default Pokemon;