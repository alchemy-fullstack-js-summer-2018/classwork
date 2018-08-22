import { ANIMAL_LOAD, ANIMAL_ADD, ANIMAL_UPDATE, ANIMAL_REMOVE } from './reducers';
import data from './animals-data';
import shortid from 'shortid';

export const load = () => ({
  type: ANIMAL_LOAD,
  payload: data
});

export const add = animal => {
  animal.key = shortid.generate();
  return {
    type: ANIMAL_ADD,
    payload: animal
  };
};

export const update = animal => ({
  type: ANIMAL_UPDATE,
  payload: animal
});

export const remove = id => ({
  type: ANIMAL_REMOVE,
  payload: id
});