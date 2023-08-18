import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

const SearchPokemon = ({ pokemonList }) => {
  const [searchSave, setSearchSave] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    const save = event.target.value.toLowerCase();
    setSearchSave(save);

    const filteredResults = pokemonList.filter(
      (pokemon) => pokemon.name.includes(save)
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <h2>Search Pokemon</h2>
      <input
        type="text"
        placeholder="Search Pokemon here..."
        value={searchSave}
        onChange={handleSearchChange}
      />
      <div className="search-results-list">
        {searchResults.map((pokemonObj) => (
          <Pokemon key={pokemonObj.name} pokemonObj={pokemonObj} />
        ))}
      </div>
    </div>
  );
};

export default SearchPokemon;
