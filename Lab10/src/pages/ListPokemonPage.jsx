import { useEffect, useState } from "react";
import ListPokemon from "../components/ListPokemon";
import SearchPokemon from "../components/SearchPokemon";
import Loading from "../components/Loading";

const ListPokemonPage = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const getListPokemon = async () => {
    const targetUrl = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(targetUrl);
    const dataJson = await response.json();

    setPokemonList(dataJson.results);
  };

  useEffect(() => {
    getListPokemon();
  }, []);

  if (!pokemonList.length) return <Loading />;

  return (
    <div>
      <SearchPokemon pokemonList={pokemonList} />
      <ListPokemon pokemonList={pokemonList} />
    </div>
  );
};

export default ListPokemonPage;