import { ANIMAL_LOAD, ANIMAL_ADD, ANIMAL_UPDATE, ANIMAL_REMOVE } from './reducers';

export const load = animals => ({
  type: ANIMAL_LOAD,
  payload: animals
});

export const add = animal => ({
  type: ANIMAL_ADD,
  payload: animal
});

export const update = animal => ({
  type: ANIMAL_UPDATE,
  payload: animal
});

export const remove = id => ({
  type: ANIMAL_REMOVE,
  payload: id
});