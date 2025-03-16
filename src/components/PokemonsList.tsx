import { SimplePokemon } from "@/types";
import { Link } from "react-router-dom";

import "@/styles/PokemonsList.css";

interface PokemonsListProps {
  activeIndex?: number;
  pokemonsList: SimplePokemon[];
}

const PokemonsList = ({ pokemonsList, activeIndex }: PokemonsListProps) => {
  return (
    <>
      {pokemonsList.map((pokemon, index) => (
        <li id={activeIndex? `pokemons-list-box-option${index}`: undefined} role="option" className={`pokemons-list-pokemon ${index === activeIndex ? "active" : ""}`} key={pokemon.name}>
          <Link className="pokemons-list-pokemon-link" to={`/pokemon/${pokemon.url.match(/\/(\d+)\/$/)?.[1] ?? ""}`}>
            {pokemon.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default PokemonsList;
