import { usePokemonsQuery } from "@/hooks"
import { PokemonResponse } from "@/types";
import { useState } from 'react';
import { Search } from '@/components'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const { data, error, isLoading } = usePokemonsQuery()
  const [ pokemonsList, setPokemonsList ] = useState<PokemonResponse[]>([]);

  if (isLoading) {
    return <div> loading... </div>
  }

  console.log(error?.message);

  return (
    <>
      <Search setPokemonsList={setPokemonsList} pokemonsOrdered={data}/>
      <ul className='pokemons-list'>
        {pokemonsList.map((pokemon: PokemonResponse, index: number) =>
          <li className='pokemons-list-pokemon' key={index}>
            <Link to={`/pokemon/${pokemon.url.slice(34)}`}>
              {pokemon.name}
            </Link>
          </li>
        )}
      </ul>
    </>
  )
}

export default HomePage;