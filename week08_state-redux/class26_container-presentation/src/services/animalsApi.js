import { put, post, get, del } from './request';

const URL = 'https://todo-9ea8e.firebaseio.com';
const ANIMALS_URL = `${URL}/animals`;

const getAnimalUrl = id => `${ANIMALS_URL}/id-${id}.json`;

export const getAnimals = () => {
  return get(`${ANIMALS_URL}.json`)
    .then(response => {
      return Object.keys(response)
        .map(key => response[key]);
    });
};

export const addAnimal =  (animal) => {
  const url = `${ANIMALS_URL}.json`;
  return post(url, animal)
    .then(res => res.name);
};

export const updateAnimal = id => {
  const url = getAnimalUrl(id);
  return put(url);
};

export const removeAnimal = id => {
  const url = getAnimalUrl(id);
  return del(url);
};