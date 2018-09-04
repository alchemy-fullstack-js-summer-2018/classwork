export const ERROR = 'ERROR';
export const ERROR_CLEAR = 'ERROR_CLEAR';
export const LOADING_START = 'LOADING_START';
export const LOADING_END = 'LOADING_END';

export const getError = state => state.error;
export const getLoading = state => state.loading;

export function error(state = null, { type, payload }) {
  switch(type) {
    case ERROR:
      return payload;
    case ERROR_CLEAR:
      return null;
    default:
      return state;
  }
}

export function loading(state = false, { type }) {
  switch(type) {
    case LOADING_START:
      return true;
    case LOADING_END:
      return false;
    default:
      return state;
  }
}