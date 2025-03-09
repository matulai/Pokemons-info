import { PokemonPaginationResponse, PokemonResponse } from "@/types";
import { generateAlphabeticAccess } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1304%22"
// "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
const usePokemonsQuery = () => {
  return useQuery<Record<string, PokemonResponse[]>>({
    queryKey: ["https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"],
    queryFn: async () => {
      const { data } = await axios.get<PokemonPaginationResponse>(
        "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
      );
      return generateAlphabeticAccess(data.results);
    },
    gcTime: Infinity,
  });
};

export default usePokemonsQuery;
