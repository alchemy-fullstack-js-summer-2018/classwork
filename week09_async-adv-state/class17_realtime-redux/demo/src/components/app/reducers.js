export const ERROR = 'ERROR';
export const ERROR_CLEAR = 'ERROR_CLEAR';
export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';
export const USER_LOAD = 'USER_LOAD';
export const GAMES_LOAD = 'GAMES_LOAD';

export const getError = state => state.error;
export const getLoading = state => state.loading;
export const getUser = state => state.user;
export const getGames = state => state.games;

export function error(state = null, { type, payload }) {
  switch(type) {
    case ERROR:
      return payload;
    case LOAD_START:
    case ERROR_CLEAR:
      return null;
    default:
      return state;
  }
}

export function loading(state = false, { type }) {
  switch(type) {
    case LOAD_START:
      return true;
    case LOAD_END:
      return false;
    default:
      return state;
  }
}

export function user(state = null, { type, payload }) {
  switch(type) {
    case USER_LOAD: 
      return payload;
    default:
      return state;
  }
}

export function games(state = [], { type, payload }) {
  return type === GAMES_LOAD ? payload : state;
}