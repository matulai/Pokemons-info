import { usePokemonsQuery } from "@/hooks"
import { Search } from '@/components'
import { PokemonResponse } from "@/types";

const HomePage = () => {
  const { data, error, isLoading } = usePokemonsQuery()

  if (isLoading) {
    return <div> loading... </div>
  }

  console.log(error?.message);

  return (
    <>
      <Search/>
      <ul className='pokemons-list'>
        {data?.map((pokemon: PokemonResponse, index: number) => 
          <li className='pokemons-list-pokemon' key={index}> {pokemon.name} </li>
        )}
      </ul>
    </>
  )
}

export default HomePage;