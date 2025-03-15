import { SimplePokemon } from "@/types";

/**
 * Sorts a list of SimplePokemon objects alphabetically by name.
 * Returns a record where the keys are the first letter of each Pokémon's name.
 *
 * @param {SimplePokemon[]} data - The list of Pokémon to be sorted.
 * @returns {Record<string, SimplePokemon[]>} - An object grouping Pokémon by their first letter.
 */
function generateAlphabeticAccess(
  data: SimplePokemon[]
): Record<string, SimplePokemon[]> {
  const groups: Record<string, SimplePokemon[]> = {};

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
