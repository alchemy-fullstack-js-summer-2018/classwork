import { PETS_LOAD, PET_LOAD } from './reducers';
import { getAllPets, getPet } from '../../services/api';
import { getPetList, getPetById } from './reducers';

export const loadPets = () => (dispatch, getState) => {
  const petList = getPetList(getState());
  if(petList.length) return;
  
  dispatch({
    type: PETS_LOAD,
    payload: getAllPets()
  });
};

export const loadPet = id => (dispatch, getState) => { 
  const pet = getPetById(getState(), id);
  if(pet && pet.favoriteToys) return;
  
  dispatch({
    type: PET_LOAD,
    payload: getPet(id)
  });
};

export const clearPet = () => ({
  type: PET_LOAD,
  payload: null
});