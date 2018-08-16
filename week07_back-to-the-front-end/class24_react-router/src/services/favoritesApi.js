import { put, get, del } from './request';

const URL = 'https://todo-9ea8e.firebaseio.com';
const FAVORITES_URL = `${URL}/favorites`;

const getFavoriteUrl = id => `${FAVORITES_URL}/id-${id}.json`;

export const addFavorite =  ({ id, name, sprites }) => {
  const url = getFavoriteUrl(id);
  return put(url, {
    id, name,
    image: sprites.front_default
  });
};

export const getFavorites = () => {
  return get(`${FAVORITES_URL}.json`)
    .then(response => {
      return Object.keys(response)
        .map(key => response[key]);
    });
};

export const getFavorite = id => {
  const url = getFavoriteUrl(id);
  return get(url);
};

export const removeFavorite = id => {
  const url = getFavoriteUrl(id);
  return del(url);
};