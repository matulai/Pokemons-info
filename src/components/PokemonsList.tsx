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
  // Hay un render entra cambios de listas que tendra diferentes listas y se mostraran.
  if (JSON.stringify(prevList) !== JSON.stringify(pokemonsList)) {
    setLoadedImages(0);
    setPrevList(pokemonsList);
  }

  function handleOnLoad(index: number) {
    if (index === pokemonsList.length - 1) {
      setLoadedImages(index);
    }
  }

  const allImagesLoads =
    pokemonsList.length > 0 && loadedImages === pokemonsList.length - 1;

  return (
    <ul className={`pokemons-list ${allImagesLoads ? "visible" : ""}`}>
      {pokemonsList.map((pokemon, index) => (
        <li className="pokemons-list-pokemon" key={pokemon.name}>
          <Link
            className="pokemons-list-pokemon-link"
            to={`/pokemon/${pokemon.url.match(/\/(\d+)\/$/)?.[1] ?? ""}`}
          >
            <img
              className="pokemons-list-pokemon-link-image"
              src={`https://raw.githubusercontent.com/matulai/Pokemon-sprites/master/sprites/pokemon/${pokemon.url.match(/\/(\d+)\/$/)?.[1] ?? ""}.png`}
              alt={`${pokemon.name} image`}
              onLoad={() => handleOnLoad(index)}
            />
            <p className="pokemons-list-pokemon-link-text">{pokemon.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PokemonsList;
