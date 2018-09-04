import { LOGOUT } from '../auth/reducers';

export const PETS_LOAD = 'PETS_LOAD';
export const PET_LOAD = 'PET_LOAD';
export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';
export const ERROR = 'ERROR';

export const getPetsById = state => state.petsById;
export const getPetList = state => state.petList;
export const getPetById = (state, id) => getPetsById(state)[id];

export const getPet = state => state.pet;

export function petsById(state = {}, { type, payload }) {
  switch(type) {
    case PETS_LOAD:
      return payload.reduce((map, pet) => {
        map[pet._id] = { 
          ...state[pet._id],
          ...pet
        };
        return map;
      }, {});
    case PET_LOAD:
      return {
        ...state,
        [payload._id]: payload
      };
    case LOGOUT: 
      return {};
    default: 
      return state;
  }
}

export function petList(state = [], { type, payload }) {
  switch(type) {
    case PETS_LOAD:
      return payload.map(pet => pet._id);
    case LOGOUT:
      return [];
    default: 
      return state;
  }
}