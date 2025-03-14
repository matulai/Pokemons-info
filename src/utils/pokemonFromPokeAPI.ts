import { Pokemon } from "@/types";

/**
 * 
 * Convert a data from response of request pokemon to type Pokemon.
 *
 */
const pokemonFromPokeAPI = (pokeAPIPokemon): Pokemon => {
  return {
    name: pokeAPIPokemon.name,
    types: typesToListString(pokeAPIPokemon.types),
    height: pokeAPIPokemon.height,
    weight: pokeAPIPokemon.weight,
    imageUrl: pokeAPIPokemon.sprites.front_default,
    criesFile: pokeAPIPokemon.cries.latest,
    pokedex_number: pokeAPIPokemon.id,
    location_area_encounters: pokeAPIPokemon.location_area_encounters,
  };
};

interface typePokeAPI {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

function typesToListString(types: typePokeAPI[]) {
  return types.map(t => t.type.url);
}

export default pokemonFromPokeAPI;
