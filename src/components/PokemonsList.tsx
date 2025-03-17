import { SimplePokemon } from "@/types";
import { Button } from "@/components";
import { Link } from "react-router-dom";

import "@/styles/PokemonsList.css";

interface PokemonsListProps {
  activeIndex?: number;
  pokemonsList: SimplePokemon[];
  inputText?: string;
  visibleSearch?: boolean;
  setPokemonSearchList?: React.Dispatch<React.SetStateAction<SimplePokemon[]>>; 
}

const PokemonsList = ({ pokemonsList, activeIndex, inputText, visibleSearch = false, setPokemonSearchList }: PokemonsListProps) => {
  return (
    <>
      {visibleSearch &&
      <li id="pokemons-list-box-option0" role="option" className={`pokemons-list-pokemon ${activeIndex ===  0? "active" : ""}`} key={"search-value"}>
        <Button children={<span>Search for: <b>{inputText}</b></span>} type="simpleButton" onClick={() => setPokemonSearchList? setPokemonSearchList(pokemonsList ?? []): undefined}/>
      </li>}
      {pokemonsList.map((pokemon, index) => (
        <li id={activeIndex? `pokemons-list-box-option${index + 1}`: undefined} role="option" className={`pokemons-list-pokemon ${activeIndex === index + 1 ? "active" : ""}`} key={pokemon.name}>
          <Link className="pokemons-list-pokemon-link" to={`/pokemon/${pokemon.url.match(/\/(\d+)\/$/)?.[1] ?? ""}`}>
            {pokemon.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default PokemonsList;
