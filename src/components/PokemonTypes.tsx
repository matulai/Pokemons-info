import { usePokemonTypeQuery } from "@/hooks";
import { Pokemon } from "@/types";

interface PokemonTypes {
  pokemonInfo: Pokemon
}

interface contentImages {
  title: string;
  images: string[];
}

function ShowImages({title, images}: contentImages) {
  return (
    <div>
      <span>{title}</span>
      {images.map((imageUrl: string, index: number) => 
        <img key={index} src={imageUrl} alt="type icon"/>
      )}
    </div>
  )
}

const PokemonTypes = ({ pokemonInfo }: PokemonTypes) => {
  const { data, error, isLoading } = usePokemonTypeQuery(pokemonInfo.types[0]!);

  if (isLoading) {
    return <div> loading... </div>
  }

  console.log(error);

  return (
    <div>
      <div>
        <span>Type: </span>
        <img src={data?.sprites} alt="type icon"/>
      </div>
      <ShowImages title="double_damage_from" images={data!.sprites_double_damage_from}/>
      <ShowImages title="double_damage_to" images={data!.sprites_double_damage_to}/>
      <ShowImages title="half_damage_from" images={data!.sprites_half_damage_from}/>
      <ShowImages title="half_damage_to" images={data!.sprites_half_damage_to}/>
      <ShowImages title="no_damage_from" images={data!.sprites_no_damage_from}/>
      <ShowImages title="no_damage_to" images={data!.sprites_no_damage_to}/>
    </div>
  )
}

export default PokemonTypes;