import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const PokemonDetailPage = () => {
  const { pokemonId } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  const getPokemonDetail = async () => {
    const targetUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const response = await fetch(targetUrl);
    const dataJson = await response.json();

    setPokemonData(dataJson);
  };

  useEffect(() => {
    getPokemonDetail();
  }, []);

  if (!pokemonData) {
    return <Loading />;
  }

  return (
    <div>
      <h2>{pokemonData.name}</h2>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
    </div>
  );
};

export default PokemonDetailPage;