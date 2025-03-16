import { SimplePokemon } from "@/types";
import { Link } from "react-router-dom";

import "@/styles/PokemonsList.css";

interface PokemonsListProps {
  activeIndex: number;
  pokemonsList: SimplePokemon[];
}

const PokemonsList = ({ pokemonsList, activeIndex }: PokemonsListProps) => {
  return (
    <ul id="pokemons-list-box" role="listbox" className="pokemons-list">
      {pokemonsList.map((pokemon, index) => (
        <li id={`pokemons-list-box-option${index}`} role="option" className={`pokemons-list-pokemon ${index === activeIndex ? "active" : ""}`} key={pokemon.name}>
          <Link to={`/pokemon/${pokemon.url.match(/\/(\d+)\/$/)?.[1] ?? ""}`}>
            {pokemon.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PokemonsList;
