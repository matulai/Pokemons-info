import { Search, PokemonsList } from "@/components";
import { usePokemonsQuery } from "@/hooks";
import { SimplePokemon } from "@/types";
import { useState } from "react";

const HomePage = () => {
  const { data, error, isLoading } = usePokemonsQuery();
  const [pokemonSearchList, setPokemonSearchList] = useState<SimplePokemon[]>([]);

  if (isLoading) {
    return <div> loading... </div>;
  }

  console.log(error?.message);
  // TODO: HACER OTRO POKEMONS LIST CON GRID Y QUE MUESTRE IMAGENES

  return (
    <>
      <Search letterPokemonRecord={data} setPokemonSearchList={setPokemonSearchList} />
      <PokemonsList pokemonsList={pokemonSearchList} />
    </>
  );
};

export default HomePage;
