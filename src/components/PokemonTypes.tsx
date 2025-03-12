import { usePokemonTypeQuery } from "@/hooks";
import { Pokemon } from "@/types";

interface PokemonTypes {
  pokemonInfo: Pokemon
}

// Inversigar, rompe si no le pasas un objeto
const PokemonTypes = ({ pokemonInfo }: PokemonTypes) => {
  const { data, error, isLoading } = usePokemonTypeQuery(pokemonInfo.types[0]!);

  if (isLoading) {
    return <div> loading... </div>
  }

  console.log(error);
  console.log("types",data);

  function showImages(title: string, images: string[]) {
    return (
      <div>
        <span>{title}</span>
        {images.map((imageUrl: string, index: number) => 
          <img key={index} src={imageUrl} alt="type icon"/>
        )}
      </div>
    )
  }

  return (
    <div>
      <div>
        <span>Type: </span>
        <img src={data?.sprites} alt="type icon"/>
      </div>
      {showImages("double_damage_from", data!.sprites_double_damage_from)}
      {showImages("double_damage_to", data!.sprites_double_damage_to)}
      {showImages("half_damage_from", data!.sprites_half_damage_from)}
      {showImages("half_damage_to", data!.sprites_half_damage_to)}
      {showImages("no_damage_from", data!.sprites_no_damage_from)}
      {showImages("no_damage_to", data!.sprites_no_damage_to)}
    </div>
  )
}

export default PokemonTypes;