import { useQuery } from "@tanstack/react-query";
import { pokemonTypeFromPokeAPI } from "@/utils";
import axios from "axios";

const usePokemonTypeQuery = (url: string) => {
  return useQuery({
    queryKey: [`${url}`],
    queryFn: async () => {
      const { data } = await axios.get(`${url}`);
      return pokemonTypeFromPokeAPI(data);
    },
  });
};

export default usePokemonTypeQuery;
