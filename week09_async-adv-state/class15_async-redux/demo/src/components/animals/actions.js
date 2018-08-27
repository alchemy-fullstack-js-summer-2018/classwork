import { ANIMAL_LOAD, ANIMAL_ADD, ANIMAL_UPDATE, ANIMAL_REMOVE } from './reducers';
import { loadAnimals, addAnimal, updateAnimal, removeAnimal } from '../../services/animalsApi';

export const load = () => ({
  type: ANIMAL_LOAD,
  payload: loadAnimals()
});

export const add = animal => ({
  type: ANIMAL_ADD,
  payload: addAnimal(animal)
});

export const update = animal => ({
  type: ANIMAL_UPDATE,
  payload: updateAnimal(animal)
});

export const remove = id => ({
  type: ANIMAL_REMOVE,
  payload: removeAnimal(id).then(() => id)
});