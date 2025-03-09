import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import type Pokemon from "@/types/pokemon"

const usePokemonQuery = () => {
  const params = useParams();

  return (
    useQuery<Pokemon>(
      {
        queryKey:[
          `https://pokeapi.co/api/v2/pokemon/${params.id}`,
        ],
      }
    )
  )
}

export default usePokemonQuery;