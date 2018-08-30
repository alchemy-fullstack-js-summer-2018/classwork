import { SHIP_ADD, SHIP_LOAD, SHIPS_LOAD, SHIP_REMOVE  } from './reducers';
import { deleteShip, getShip, getShips, postShip } from '../../services/api';

export const loadShips = () => ({
  type: SHIPS_LOAD,
  payload: getShips()
});

export const addShip = data => ({
  type: SHIP_ADD,
  payload: postShip(data)
});

export const loadShip = id => ({
  type: SHIP_LOAD,
  payload: getShip(id)
});

export const removeShip = id => ({
  type: SHIP_REMOVE,
  payload: deleteShip(id).then(() => id)
});
