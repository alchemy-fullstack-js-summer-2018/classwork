export const ANIMAL_LOAD = 'ANIMAL_LOAD';
export const ANIMAL_ADD = 'ANIMAL_ADD';
export const ANIMAL_UPDATE = 'ANIMAL_UPDATE';
export const ANIMAL_REMOVE = 'ANIMAL_REMOVE';

export const getAnimals = state => state.animals;

export function animals(state = [], { type, payload }) {
  switch(type) {
    case ANIMAL_LOAD:
      return payload;
    case ANIMAL_ADD:
      return [
        ...state,
        payload
      ];
    case ANIMAL_UPDATE:
      return state.map(animal => animal.key === payload.key ? payload : animal);
    case ANIMAL_REMOVE:
      return state.filter(animal => animal.key !== payload);
    default: 
      return state;
  }

}