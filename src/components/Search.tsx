import { PokemonResponse } from "@/types";
import { useState } from "react";

interface SearchProps {
  setPokemonsList: React.Dispatch<React.SetStateAction<PokemonResponse[]>>;
  pokemonsOrdered: Record<string, PokemonResponse[]> | undefined;
}

const Search = ({ setPokemonsList, pokemonsOrdered }: SearchProps) => {
  const [text, setText] = useState("");

  function onEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && text[0] && pokemonsOrdered) {
      const pokemonsStartsWith: PokemonResponse[] = allStartWith(
        text,
        pokemonsOrdered[text[0]]
      );
      setPokemonsList(pokemonsStartsWith);
    }
  }

  function allStartWith(text: string, pokemons: PokemonResponse[] | undefined) {
    if (!pokemons) return [];
    return pokemons.filter(pokemon => pokemon.name.startsWith(text));
  }

  return (
    <div className="search-input">
      <div className="search-input-text">Search pokemon</div>
      <input
        type="search"
        onChange={e => setText(e.target.value)}
        onKeyDown={onEnter}
        className="search-input-pokemons"
        placeholder="search pokemon"
      />
    </div>
  );
};

export default Search;
