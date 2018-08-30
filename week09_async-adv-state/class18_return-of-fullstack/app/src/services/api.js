import { get, post, del } from './request';

const URL = '/api';
const SHIPS_URL = `${URL}/ships`;

export const getShips = () => get(SHIPS_URL);
export const postShip = data => post(SHIPS_URL, data);
export const getShip = id => get(`${SHIPS_URL}/${id}`);
export const deleteShip = id => del(`${SHIPS_URL}/${id}`);