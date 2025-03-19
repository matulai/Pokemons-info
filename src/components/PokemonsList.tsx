import { SimplePokemon } from "@/types";
import { useState } from "react";
import { Link } from "react-router-dom";

import "@/styles/PokemonsList.css";

interface PokemonsOptionsListProps {
  pokemonsList: SimplePokemon[];
}

const PokemonsList = ({ pokemonsList }: PokemonsOptionsListProps) => {
  const [allImagesLoads, setAllImagesLoads] = useState<boolean>(false);

  function handleOnLoad(index: number) {
    if (pokemonsList.length - 1 === index) {
      setAllImagesLoads(true);
    }
  }

  return (
    <ul className={`pokemons-list ${pokemonsList.length !== 0 && allImagesLoads? "": "invisible"}`}>
      {pokemonsList.map((pokemon, index) => (
        <li className="pokemons-list-pokemon" key={pokemon.name}>
          <Link
            className="pokemons-list-pokemon-link"
            to={`/pokemon/${pokemon.url.match(/\/(\d+)\/$/)?.[1] ?? ""}`}
          >
            <img
              className="pokemons-list-pokemon-image"
              src={`https://raw.githubusercontent.com/matulai/Pokemon-sprites/master/sprites/pokemon/${pokemon.url.match(/\/(\d+)\/$/)?.[1] ?? ""}.png`}
              alt={`${pokemon.name} image`}
              onLoad={() => handleOnLoad(index)}
            />
            {pokemon.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PokemonsList;
