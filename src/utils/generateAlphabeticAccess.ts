import { PokemonResponse } from "@/types";

/**
 * Sorts a list of PokemonResponse objects alphabetically by name.
 * Returns a record where the keys are the first letter of each Pokémon's name.
 *
 * @param {PokemonResponse[]} data - The list of Pokémon to be sorted.
 * @returns {Record<string, PokemonResponse[]>} - An object grouping Pokémon by their first letter.
 */
function generateAlphabeticAccess(
  data: PokemonResponse[]
): Record<string, PokemonResponse[]> {
  const groups: Record<string, PokemonResponse[]> = {};

  for (const pokemon of data) {
    const firstLetter = pokemon.name[0]!.toLowerCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(pokemon);
  }

  return groups;
}

export default generateAlphabeticAccess;
