import { SimplePokemon } from "@/types";
import { Link } from "react-router-dom"

interface PokemonsOptionsListProps {
  pokemonsList: SimplePokemon[];
}

const PokemonsList = ({pokemonsList}: PokemonsOptionsListProps) => {
  return(
    <>
      {pokemonsList.map(pokemon => (
        <li className="pokemons-list-pokemon" key={pokemon.name}>
          <Link className="pokemons-list-pokemon-link" to={`/pokemon/${pokemon.url.match(/\/(\d+)\/$/)?.[1] ?? ""}`}>
            {pokemon.name}
          </Link>
        </li>
      ))}
    </>
  )
}

export default PokemonsList;