import { post } from './request';

const URL = 'https://todo-9ea8e.firebaseio.com';
const FAVORITES_URL = `${URL}/favorites.json`;

// const getFavoriteUrl = id => `${URL}/favorites/${id}.json`;

export const addFavorite =  favorite => post(FAVORITES_URL, favorite);