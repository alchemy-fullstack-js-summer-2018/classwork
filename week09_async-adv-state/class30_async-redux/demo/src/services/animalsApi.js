import { put, post, get, del } from './request';

const URL = 'https://todo-9ea8e.firebaseio.com';
const ANIMALS_URL = `${URL}/animals`;

const getAnimalUrl = key => `${ANIMALS_URL}/${key}.json`;

export const loadAnimals = () => {
  return get(`${ANIMALS_URL}.json`)
    .then(response => {
      return response
        ? Object.keys(response).map(key => {
          const each = response[key];
          each.key = key;
          return each;
        })
        : [];
    });
};

export const addAnimal =  (animal) => {
  if(animal.name === 'fluffy') {
    return Promise.reject('oh pls, try harder...');
  }

  const url = `${ANIMALS_URL}.json`;
  return post(url, animal)
    .then(res => {
      animal.key = res.name;
      return animal;
    });
};

export const updateAnimal = animal => {
  // eslint-disable-next-line
  const { key, ...copy } = animal;
  const url = getAnimalUrl(animal.key);
  return put(url, copy);
};

export const removeAnimal = id => {
  const url = getAnimalUrl(id);
  return del(url);
};