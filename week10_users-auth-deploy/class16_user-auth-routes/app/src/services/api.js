import { get, post } from './request';

const URL = '/api';
const PETS_URL = `${URL}/pets`;
const AUTH_URL = `${URL}/auth`;

export const getAllPets = () => get(PETS_URL);
export const getPet = id => get(`${PETS_URL}/${id}`);

export const signin = credentials => post(`${AUTH_URL}/signin`, credentials);
export const signup = credentials => post(`${AUTH_URL}/signup`, credentials);

export const verifyUser = token => get(`${AUTH_URL}/verify`, { 
  headers: {
    Authorization: token
  }
});