import { PokemonsList } from "@/components";
import { SimplePokemon } from "@/types";
import { useState } from "react";

interface SearchProps {
  setPokemonsList: React.Dispatch<React.SetStateAction<SimplePokemon[]>>;
  pokemonsOrdered: Record<string, SimplePokemon[]> | undefined;
}

const Search = ({ setPokemonsList, pokemonsOrdered }: SearchProps) => {
  const [pokemonsOptions, setPokemonsOptions] = useState<SimplePokemon[]>([]);

  function handleOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && pokemonsOptions.length > 0) {
      setPokemonsList(pokemonsOptions);
    }
  }

  function allStartWith(
    text: string,
    pokemons: SimplePokemon[] | undefined,
    limit: number
  ) {
    if (!pokemons) return [];
    return pokemons
      .filter(pokemon => pokemon.name.startsWith(text))
      .slice(0, limit);
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newText: string = e.target.value;
    if (pokemonsOrdered && newText[0]) {
      setPokemonsOptions(
        allStartWith(newText, pokemonsOrdered[newText[0]], 10)
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
