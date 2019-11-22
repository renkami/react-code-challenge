import React from "react";
import ResultItem from "./ResultItem";
import NoResult from "./NoResult";

const Result = props => (
  <ul className="suggestions">
    {props.pokemons && props.pokemons.length > 0 ? (
      props.pokemons.map(pokemon => (
        <ResultItem
          pokemon={pokemon}
          search={props.search}
          key={pokemon.Number}
        />
      ))
    ) : (
      <NoResult />
    )}
  </ul>
);

export default Result;
