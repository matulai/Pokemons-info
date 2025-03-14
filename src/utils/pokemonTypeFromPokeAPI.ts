import { PokemonType } from "@/types";

function pokemonTypeFromPokeAPI(pokeAPIPokemonType): PokemonType {
  return {
    sprites_double_damage_from: typesToListStringURL(
      pokeAPIPokemonType.damage_relations.double_damage_from
    ),
    sprites_double_damage_to: typesToListStringURL(
      pokeAPIPokemonType.damage_relations.double_damage_to
    ),
    sprites_half_damage_from: typesToListStringURL(
      pokeAPIPokemonType.damage_relations.half_damage_from
    ),
    sprites_half_damage_to: typesToListStringURL(
      pokeAPIPokemonType.damage_relations.half_damage_to
    ),
    sprites_no_damage_from: typesToListStringURL(
      pokeAPIPokemonType.damage_relations.no_damage_from
    ),
    sprites_no_damage_to: typesToListStringURL(
      pokeAPIPokemonType.damage_relations.no_damage_to
    ),
    sprites: pokeAPIPokemonType.sprites["generation-iii"].colosseum.name_icon,
  };
}

interface typePokeAPI {
  name: string;
  url: string;
}

function typesToListStringURL(types: typePokeAPI[]) {
  return types.map(
    t =>
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/${getIdFromURL(t.url)}.png`
  );
}

function getIdFromURL(url: string) {
  const match = url.match(/\/(\d+)\/$/);
  const id = match ? match[1] : null;
  return id;
}

export default pokemonTypeFromPokeAPI;
