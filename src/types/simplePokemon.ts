interface PokemonPaginationResponse {
  count: number;
  next: string;
  previous: string;
  results: SimplePokemon[];
}

interface SimplePokemon {
  name: string;
  url: string;
}

export type { PokemonPaginationResponse, SimplePokemon };
