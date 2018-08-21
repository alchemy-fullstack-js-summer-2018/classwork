import { getWithCache } from './request';
const BASE_URL = 'https://pokeapi.co/api/v2';
const POKEMON_URL = `${BASE_URL}/pokemon`;

export const getPokemon = id => getWithCache(`${POKEMON_URL}/${id}`);
export const getPokemonList = (url = POKEMON_URL) => getWithCache(url);
