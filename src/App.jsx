import React, { useEffect, useState } from "react";
import "./App.css";
import Result from "./componets/search/Result";

const URL_PATH =
  "https://gist.githubusercontent.com/bar0191/fae6084225b608f25e98b733864a102b/raw/dea83ea9cf4a8a6022bfc89a8ae8df5ab05b6dcc/pokemon.json";
const App = () => {
  let pokemons = [];
  let [pokemonList, setPokemons] = useState([]);
  let [sortByCP, setCPSort] = useState(false);
  let [search, setSearch] = useState("");
  let [searching, setSearching] = useState(false);
  useEffect(() => {
    fetch(URL_PATH)
      .then(resultList => {
        return resultList.json();
      })
      .then(resultJson => {
        console.log(resultJson);
        pokemons = resultJson;
      });
  });
  const filterPokemons = e => {
    setSearching(true);
    setSearch(e.target.value);
    console.log(e.target.value);
    let count = 0;
    let filteredPokemons = pokemons.filter(pokemon => {
      if (
        count < 4 &&
        (pokemon.Name.indexOf(search) !== -1 ||
          pokemon.Type.some(type => type.indexOf(search) !== -1))
      ) {
        count++;
        return true;
      }
      return false;
    });
    if (sortByCP) {
      filteredPokemons = filterPokemons.sort((a, b) => a.MaxCP - b.MaxCP);
    }
    setPokemons(filteredPokemons);
    setSearching(false);
  };
  return (
    <>
      <label htmlFor="maxCP" className="max-cp">
        <input
          type="checkbox"
          id="maxCP"
          onClick={() => setCPSort(!sortByCP)}
        />
        <small>Maximum Combat Points</small>
      </label>
      <input
        type="text"
        className="input"
        placeholder="Pokemon or type"
        onKeyUp={filterPokemons}
      />
      {searching && <div className="loader" />}
      <Result pokemons={pokemonList} search={search} />
    </>
  );
};

export default App;
