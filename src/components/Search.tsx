import { PokemonResponse } from "@/types";
import { useState } from "react";
import { Link } from "react-router-dom"

interface SearchProps {
  setPokemonsList: React.Dispatch<React.SetStateAction<PokemonResponse[]>>;
  pokemonsOrdered: Record<string, PokemonResponse[]> | undefined;
}

const Search = ({ setPokemonsList, pokemonsOrdered }: SearchProps) => {
  const [text, setText] = useState("");
  const [pokemonsOptions, setPokemonsOptions] = useState<PokemonResponse[]>([]);

  function handleOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && text) {
      setPokemonsList(pokemonsOptions);
      setText("");
    }
  }

  function allStartWith(text: string, pokemons: PokemonResponse[] | undefined, limit: number) {
    if (!pokemons) return [];
    return pokemons.filter(pokemon => pokemon.name.startsWith(text)).slice(0, limit);
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
    const newText: string = e.target.value;
    if(pokemonsOrdered && newText[0]) {
      setPokemonsOptions(allStartWith(newText, pokemonsOrdered[newText[0]], 10));
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
      <ul className="search-result-options">
        {pokemonsOptions.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/pokemon/${pokemon.url.slice(34)}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
