export const SHIPS_LOAD = 'SHIPS_LOAD';
export const SHIP_LOAD = 'SHIP_LOAD';
export const SHIP_ADD = 'SHIP_ADD';
export const SHIP_REMOVE = 'SHIP_REMOVE';

export const ships = (state = [], { type, payload }) => {
  switch(type) {
    case SHIPS_LOAD:
      return payload;
    case SHIP_ADD:
      return [...state, payload];
    case SHIP_REMOVE:
      return state.filter(s => s._id !== payload);
    default:
      return state;
  }
};

export const ship = (state = null, { type, payload }) => {
  switch(type) {
    case SHIP_LOAD:
      return payload;
    case SHIP_REMOVE:
      return null;
    default:
      return state;
  }
};