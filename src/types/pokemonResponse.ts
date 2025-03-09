interface PokemonPaginationResponse {
  count: number,
  next: string,
  previous: string,
  results: PokemonResponse[],
}

interface PokemonResponse {
  name: string,
  url: string,
}

export type { PokemonPaginationResponse, PokemonResponse };