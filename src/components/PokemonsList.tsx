import { useState, useEffect } from "react";
import { SimplePokemon } from "@/types";
import { Button } from "@/components";
import { Link } from "react-router-dom";

import "@/styles/PokemonsList.css";

interface PokemonsOptionsListProps {
  pokemonsList: SimplePokemon[];
  amountPerPage: number;
}

const PokemonsList = ({ pokemonsList, amountPerPage }: PokemonsOptionsListProps) => {
  const [loadedImages, setLoadedImages] = useState<number>(0);
  const [prevList, setPrevList] = useState(pokemonsList);

  const [page, setPage] = useState<number>(0);
  // Otra manera no se me ocurrio de resolver esto.
  // Resetear el contador de imágenes si la lista cambia
  // Hay un render entra cambios de listas que tendra diferentes listas y se mostraran.
  useEffect(() => {
    if (JSON.stringify(prevList) !== JSON.stringify(pokemonsList)) {
      setLoadedImages(0);
      setPrevList(pokemonsList);
      setPage(0);
    }
  }, [pokemonsList]);

  function handleOnLoad(index: number) {
    if (index === pokemonsListActualPage.length - 1) {
      setLoadedImages(index);
    }
  }

  function handlePreviusOnClick() {
    setPage(prev => prev - 1);
  }

  function handleNextOnClick() {
    setPage(prev => prev + 1);
  }

  const pokemonsListActualPage = pokemonsList.slice(page*amountPerPage, (page+1)*amountPerPage);

  const allImagesLoads =
    pokemonsListActualPage.length > 0 && loadedImages === pokemonsListActualPage.length - 1;

  return (
    <section className={`pokemons-list ${allImagesLoads ? "visible" : ""}`}>
      <div className="pokemons-list-nav">
        {page > 0? <Button type="onlyIcon" title="previus" onClick={handlePreviusOnClick} />: "....." }
        {page < Math.floor(pokemonsList.length / amountPerPage)? 
          <Button type="onlyIcon" title="next" onClick={handleNextOnClick} />: "....." }
      </div>
      <ul className="pokemons-list-content">
        {pokemonsListActualPage.map((pokemon, index) => (
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
    </section>
  );
};

export default PokemonsList;
