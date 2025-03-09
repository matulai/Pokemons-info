import { PokemonResponse } from "@/types";

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
