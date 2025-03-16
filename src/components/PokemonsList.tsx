import { SimplePokemon } from "@/types";
import { Link } from "react-router-dom";

import "@/styles/PokemonsList.css";

interface PokemonsListProps {
  pokemonsList: SimplePokemon[];
}

const PokemonsList = ({ pokemonsList }: PokemonsListProps) => {
  return (
    <ul className="pokemons-list">
      {pokemonsList.map(pokemon => (
        <li className="pokemons-list-pokemon" key={pokemon.name}>
          <Link to={`/pokemon/${pokemon.url.match(/\/(\d+)\/$/)?.[1] ?? ""}`}>
            {pokemon.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PokemonsList;
