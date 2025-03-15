import { SimplePokemon } from "@/types";

function allSimplePokemonsStartsWith(
  text: string,
  pokemons: SimplePokemon[] | undefined
) {
  if (!pokemons) return [];
  return pokemons.filter(pokemon => pokemon.name.startsWith(text));
}

export default allSimplePokemonsStartsWith;
