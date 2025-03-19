import { SimplePokemon } from "@/types";
import { useState } from "react";
import { Link } from "react-router-dom";

import "@/styles/PokemonsList.css";

interface PokemonsOptionsListProps {
  pokemonsList: SimplePokemon[];
}

const PokemonsList = ({ pokemonsList }: PokemonsOptionsListProps) => {
  const [loadedImages, setLoadedImages] = useState<number>(0);
  const [prevList, setPrevList] = useState(pokemonsList);

  // Otra manera no se me ocurrio de resolver esto.
  // Resetear el contador de imágenes si la lista cambia
  if (prevList !== pokemonsList) {
    setLoadedImages(0);
    setPrevList(pokemonsList);
  }

  console.log("pre", prevList, "actual", pokemonsList);
  console.log("loadedImages", loadedImages, "pokemonsList", pokemonsList.length)

  function handleOnLoad() {
    setLoadedImages((prev) => prev + 1);
  }

  const allImagesLoads = pokemonsList.length > 0 && loadedImages === pokemonsList.length;
  console.log(allImagesLoads);
  return (
    <ul className={`pokemons-list ${allImagesLoads? "visible": ""}`}>
      {pokemonsList.map(pokemon => (
        <li className="pokemons-list-pokemon" key={pokemon.name}>
          <Link
            className="pokemons-list-pokemon-link"
            to={`/pokemon/${pokemon.url.match(/\/(\d+)\/$/)?.[1] ?? ""}`}
          >
            <img
              className="pokemons-list-pokemon-link-image"
              src={`https://raw.githubusercontent.com/matulai/Pokemon-sprites/master/sprites/pokemon/${pokemon.url.match(/\/(\d+)\/$/)?.[1] ?? ""}.png`}
              alt={`${pokemon.name} image`}
              onLoad={handleOnLoad}
            />
            <p className="pokemons-list-pokemon-link-text">{pokemon.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PokemonsList;
