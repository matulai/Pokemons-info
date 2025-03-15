import { PokemonPaginationResponse, SimplePokemon } from "@/types";
import { generateAlphabeticAccess } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePokemonsQuery = () => {
  return useQuery<Record<string, SimplePokemon[]>>({
    queryKey: ["https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1304%22"],
    queryFn: async () => {
      const { data } = await axios.get<PokemonPaginationResponse>(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1304%22"
      );
      return generateAlphabeticAccess(data.results);
    },
    gcTime: Infinity,
  });
};

export default usePokemonsQuery;
