import { SimplePokemon } from "@/types";
import { Button } from "@/components";
import { Link } from "react-router-dom";

import "@/styles/PokemonsOptionsList.css";

interface PokemonsOptionsListProps {
  setPokemonSearchList: () => void;
  pokemonsList: SimplePokemon[];
  activeIndex: number;
  inputText: string;
}

const PokemonsOptionsList = ({
  pokemonsList,
  activeIndex,
  inputText,
  setPokemonSearchList,
}: PokemonsOptionsListProps) => {
  return (
    <>
      {pokemonsList.length !== 0 && (
        <li
          id="pokemons-options-list-box-option0"
          role="option"
          className={`pokemons-options-list-pokemon ${activeIndex === 0 ? "active" : ""}`}
          key={"search-value"}
        >
          <Button
            children={
              <span>
                Search for: <b>{inputText}</b>
              </span>
            }
            type="onlyIconCoverAllBlue"
            onClick={setPokemonSearchList}
          />
        </li>
      )}
      {pokemonsList.map((pokemon, index) => (
        <li
          id={`pokemons-options-list-box-option${index + 1}`}
          role="option"
          className={`pokemons-options-list-pokemon ${activeIndex === index + 1 ? "active" : ""}`}
          key={pokemon.name}
        >
          <Link
            className="pokemons-options-list-pokemon-link"
            to={`/pokemon/${pokemon.url.match(/\/(\d+)\/$/)?.[1] ?? ""}`}
          >
            {pokemon.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default PokemonsOptionsList;
