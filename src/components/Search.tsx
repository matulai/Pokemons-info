import { allSimplePokemonsStartsWith } from "@/utils";
import { PokemonsList } from "@/components";
import { SimplePokemon } from "@/types";
import { useState } from "react";

interface SearchProps {
  setPokemonsList: React.Dispatch<React.SetStateAction<SimplePokemon[]>>;
  letter_Pokemon: Record<string, SimplePokemon[]> | undefined;
}

const Search = ({ setPokemonsList, letter_Pokemon }: SearchProps) => {
  const [pokemonsOptions, setPokemonsOptions] = useState<SimplePokemon[]>([]);

  function handleOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && pokemonsOptions.length > 0) {
      setPokemonsList(pokemonsOptions);
    }
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newText: string = e.target.value;
    if (letter_Pokemon && newText[0]) {
      setPokemonsOptions(
        allSimplePokemonsStartsWith(newText, letter_Pokemon[newText[0]])
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
      <PokemonsList pokemonsList={ pokemonsOptions }/>
    </div>
  );
};

export default Search;
