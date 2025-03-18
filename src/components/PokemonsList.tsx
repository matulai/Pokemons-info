import { SimplePokemon } from "@/types";
import { Link } from "react-router-dom";

import "@/styles/PokemonsList.css";

interface PokemonsOptionsListProps {
  pokemonsList: SimplePokemon[];
}

const PokemonsList = ({ pokemonsList }: PokemonsOptionsListProps) => {
  return (
    <ul className="pokemons-list">
      {pokemonsList.map(pokemon => (
        <li className="pokemons-list-pokemon" key={pokemon.name}>
          <img
            className="pokemons-list-pokemon-image"
            src={`https://raw.githubusercontent.com/matulai/Pokemon-sprites/master/sprites/pokemon/${pokemon.url.match(/\/(\d+)\/$/)?.[1] ?? ""}.png`}
            alt={`${pokemon.name} image`}
          />
          <Link
            className="pokemons-list-pokemon-link"
            to={`/pokemon/${pokemon.url.match(/\/(\d+)\/$/)?.[1] ?? ""}`}
          >
            {pokemon.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PokemonsList;
