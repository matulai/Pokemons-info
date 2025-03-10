import { Pokemon } from "@/types";

const pokemonFromPokeAPI = (pokeAPIPokemon): Pokemon => {
  return {
    name: pokeAPIPokemon.name,
    types: typesToListString(pokeAPIPokemon.types),
    criesFile: pokeAPIPokemon.cries.latest,
    imageUrl: pokeAPIPokemon.sprites.front_default,
    height: pokeAPIPokemon.height,
    weight: pokeAPIPokemon.weight,
    pokedex_number: pokeAPIPokemon.id,
    location_area_encounters: pokeAPIPokemon.location_area_encounters,
  }
}

interface typePokeAPI {
  slot: number,
  type: {
    name: string,
    url: string,
  },
}

function typesToListString(types: typePokeAPI[]) {
  return types.map(t => t.type.url);
}

export default pokemonFromPokeAPI;