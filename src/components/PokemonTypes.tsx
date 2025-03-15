import { usePokemonTypeQuery } from "@/hooks";
import { ImagesList } from "@/components";
import { Pokemon } from "@/types";

interface PokemonTypesProps {
  pokemonInfo: Pokemon;
}

const PokemonTypes = ({ pokemonInfo }: PokemonTypesProps) => {
  const { data, error, isLoading } = usePokemonTypeQuery(pokemonInfo.types[0]!);

  if (isLoading) {
    return <div> loading... </div>;
  }

  console.log(error?.message);

  return (
    <div>
      <div>
        <span>Type: </span>
        <img src={data?.sprites} alt="type icon" />
      </div>
      <ImagesList
        title="double_damage_from"
        images={data!.sprites_double_damage_from}
      />
      <ImagesList
        title="double_damage_to"
        images={data!.sprites_double_damage_to}
      />
      <ImagesList
        title="half_damage_from"
        images={data!.sprites_half_damage_from}
      />
      <ImagesList
        title="half_damage_to"
        images={data!.sprites_half_damage_to}
      />
      <ImagesList
        title="no_damage_from"
        images={data!.sprites_no_damage_from}
      />
      <ImagesList title="no_damage_to" images={data!.sprites_no_damage_to} />
    </div>
  );
};

export default PokemonTypes;
