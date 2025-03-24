import { allSimplePokemonsStartsWith } from "@/utils";
import { PokemonsOptionsList } from "@/components";
import { useState, useRef } from "react";
import { SimplePokemon } from "@/types";
import { useNavigate } from "react-router-dom";

import "@/styles/Search.css";

interface SearchProps {
  letterPokemonRecord?: Record<string, SimplePokemon[]>;
  setPokemonSearchList: React.Dispatch<React.SetStateAction<SimplePokemon[]>>;
}

const Search = ({ letterPokemonRecord, setPokemonSearchList }: SearchProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [pokemonsOptions, setPokemonsOptions] = useState<SimplePokemon[]>([]);
  const [pokemonsToShow, setPokemonsToShow] = useState<SimplePokemon[]>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const [inputText, setInputText] = useState<string>("");

  const listRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  function handleOnKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    // Se aumenta en 1 a la longitud para tener en cuenta el search.
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex(prev => {
        return pokemonsOptions.length + 1 === prev + 1 ? 0 : prev + 1;
      });
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex(prev => {
        return prev - 1 < 0 ? pokemonsOptions.length : prev - 1;
      });
    } else if (event.key === "PageDown") {
      // Fn + ArrowDown (Ir al último)
      setActiveIndex(pokemonsOptions.length - 1);
    } else if (event.key === "PageUp") {
      // Fn + ArrowUp (Ir al primero)
      setActiveIndex(0);
    } else if (event.key === "Enter") {
      // Redirigir al enlace activo si se presiona Enter
      const selectedPokemon = pokemonsOptions[activeIndex - 1];
      if (selectedPokemon) {
        navigate(
          `/pokemon/${selectedPokemon.url.match(/\/(\d+)\/$/)?.[1] ?? ""}`
        );
      } else {
        setPokemonSearchList(pokemonsToShow);
        // Saco el focus del input
        inputRef.current?.blur();
        // Oculto las opciones de busqueda.
        setShowOptions(false);
      }
    }
  }

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newText: string = event.target.value;
    setInputText(newText);
    // TODO: Pagination.
    if (letterPokemonRecord && newText[0]) {
      const newPokemons = allSimplePokemonsStartsWith(newText,letterPokemonRecord[newText[0]])
      setPokemonsOptions(newPokemons.slice(0, 6));
      setPokemonsToShow(newPokemons);
    } else {
      setPokemonsOptions([]);
      setPokemonsToShow([]);
    }
  }

  function handleOnFocus() {
    setShowOptions(true);
  }

  function handleOnBlur() {
    // Si haces click en las opciones le da un tiempo para que tome primero el click
    setTimeout(() => {
      if (!listRef.current?.contains(document.activeElement)) {
        setShowOptions(false);
      }
    }, 100);
  }

  return (
    <div className="search-container">
      <input
        ref={inputRef}
        type="search"
        role="combobox"
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        className="search-container-input"
        placeholder="search pokemon"
        aria-controls="search-container-options-box"
        aria-expanded="true"
        aria-activedescendant={`pokemons-options-list-box-option${activeIndex}`}
      />
      <ul
        ref={listRef}
        id="search-container-options-box"
        role="listbox"
        className={`search-container-options ${showOptions ? "visible" : ""}`}
      >
        <PokemonsOptionsList
          pokemonsList={pokemonsOptions}
          activeIndex={activeIndex}
          inputText={inputText}
          setPokemonSearchList={() => setPokemonSearchList(pokemonsToShow)}
        />
      </ul>
    </div>
  );
};

export default Search;
