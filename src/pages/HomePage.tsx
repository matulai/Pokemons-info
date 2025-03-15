import { usePokemonsQuery } from "@/hooks";
import { Search } from "@/components";

const HomePage = () => {
  const { data, error, isLoading } = usePokemonsQuery();

  if (isLoading) {
    return <div> loading... </div>;
  }

  console.log(error?.message);

  return (
    <>
      <Search letterPokemon={data} />
    </>
  );
};

export default HomePage;
