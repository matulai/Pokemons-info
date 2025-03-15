import { allSimplePokemonsStartsWith } from "@/utils";
import { PokemonsList } from "@/components";
import { SimplePokemon } from "@/types";
import { useState } from "react";

import "@/styles/Search.css";

interface SearchProps {
  letterPokemon: Record<string, SimplePokemon[]> | undefined;
}

const Search = ({ letterPokemon }: SearchProps) => {
  const [pokemonsOptions, setPokemonsOptions] = useState<SimplePokemon[]>([]);

  function handleOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && pokemonsOptions.length > 0) {
      console.log("todo");
    }
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newText: string = e.target.value;
    if (letterPokemon && newText[0]) {
      setPokemonsOptions(
        allSimplePokemonsStartsWith(newText, letterPokemon[newText[0]])
      );
    } else {
      setPokemonsOptions([]);
    }
  }

  return (
    <div className="search-input">
      <div className="search-input-text">Search pokemon</div>
      <input
        type="search"
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        className="search-input-pokemons"
        placeholder="search pokemon"
      />
      <PokemonsList pokemonsList={pokemonsOptions} />
    </div>
  );
};

export default Search;
