import { Search, PokemonsList } from "@/components";
import { usePokemonsQuery } from "@/hooks";
import { SimplePokemon } from "@/types";
import { useState } from "react";

interface HomePageProps {
  showError: (string: string) => void;
}

const HomePage = ({showError}: HomePageProps) => {
  const { data, error, isLoading } = usePokemonsQuery();
  const [pokemonSearchList, setPokemonSearchList] = useState<SimplePokemon[]>(
    []
  );

  if (isLoading) {
    return <div> loading... </div>;
  }

  if(error) {
    showError(error.message);
  }
  
  return (
    <>
      <Search
        letterPokemonRecord={data}
        setPokemonSearchList={setPokemonSearchList}
      />
      <PokemonsList pokemonsList={pokemonSearchList} />
    </>
  );
};

export default HomePage;
