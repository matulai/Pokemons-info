import { allSimplePokemonsStartsWith } from "@/utils";
import { SimplePokemon } from "@/types";
import { PokemonsList } from "@/components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "@/styles/Search.css";

interface SearchProps {
  letterPokemonRecord: Record<string, SimplePokemon[]> | undefined;
}

const Search = ({ letterPokemonRecord }: SearchProps) => {
  const [pokemonsOptions, setPokemonsOptions] = useState<SimplePokemon[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const navigate = useNavigate();

  function handleOnKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      setActiveIndex(prev => {
        const actualIndex = pokemonsOptions.length === prev + 1? 0 : prev + 1;
        return Math.min(actualIndex, pokemonsOptions.length - 1)
      });
    } else if (event.key === "ArrowUp") {
      setActiveIndex(prev => {
        const actualIndex = (prev - 1) < 0 ? pokemonsOptions.length - 1 : prev - 1;
        return Math.max(actualIndex, 0)
      });
    } else if (event.key === "PageDown") {
      // Fn + ArrowDown (Ir al último)
      setActiveIndex(pokemonsOptions.length - 1);
    } else if (event.key === "PageUp") {
      // Fn + ArrowUp (Ir al primero)
      setActiveIndex(0);
    } else if (event.key === "Enter") {
      // Redirigir al enlace activo si se presiona Enter
      const selectedPokemon = pokemonsOptions[activeIndex];
      if (selectedPokemon) {
        navigate(`/pokemon/${selectedPokemon.url.match(/\/(\d+)\/$/)?.[1] ?? ""}`);
      }
    }
  }

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newText: string = event.target.value;
    if (letterPokemonRecord && newText[0]) {
      setPokemonsOptions(
        allSimplePokemonsStartsWith(newText, letterPokemonRecord[newText[0]]).slice(0, 7)
      );
    } else {
      setPokemonsOptions([]);
    }
  }

  function handleOnBlur() {
    setPokemonsOptions([]);
  }

  return (
    <div className="search-input">
      <input
        type="search"
        role="combobox"
        onBlur={handleOnBlur}
        onFocus={handleOnChange}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        className="search-input-pokemons"
        placeholder="search pokemon"
        aria-controls="pokemons-list-box"
        aria-expanded="true"
        aria-activedescendant={`pokemons-list-box-option${activeIndex}`}
      />
      <PokemonsList pokemonsList={pokemonsOptions} activeIndex={activeIndex} />
    </div>
  );
};

export default Search;
