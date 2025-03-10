import { pokemonFromPokeAPI } from "@/utils";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import type Pokemon from "@/types/pokemon";
import axios from "axios";

const usePokemonQuery = () => {
  const params = useParams();

  return useQuery<Pokemon>({
    queryKey: [`https://pokeapi.co/api/v2/pokemon/${params.id}`],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${params.id}`
      );
      return pokemonFromPokeAPI(data);
    },
  });
};

export default usePokemonQuery;
