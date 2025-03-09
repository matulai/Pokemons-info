import { PokemonPaginationResponse, PokemonResponse } from '@/types';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const usePokemonsQuery = () => {
  // "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1304%22"
  return useQuery<PokemonResponse[]>(
    {
      queryKey: [
        "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
      ],
      queryFn: async() => {
        const { data } = await axios.get<PokemonPaginationResponse>("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20");
        return data.results;
      },
      gcTime: Infinity
    }
  );
};

export default usePokemonsQuery;