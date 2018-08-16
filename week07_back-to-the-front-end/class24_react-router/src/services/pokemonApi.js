import { get } from './request';
const BASE_URL = 'https://pokeapi.co/api/v2';
const POKEMON_URL = `${BASE_URL}/pokemon`;

const getUrl = url => {
  const json = window.localStorage.getItem(url);
  if(json) {
    const response = JSON.parse(json);
    return Promise.resolve(response);
  }

  return get(url)
    .then(response => {
      window.localStorage.setItem(url, JSON.stringify(response));
      return response;
    });
};

export function getPokemon(id) {
  if(id) {
    return getUrl(`${POKEMON_URL}/${id}`);
  }
  else {
    return getUrl(POKEMON_URL);
  }
}
