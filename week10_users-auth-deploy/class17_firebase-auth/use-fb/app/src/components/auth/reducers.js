export const USER_AUTH = 'USER_AUTH';
export const LOGOUT = 'LOGOUT';
export const CHECKED_AUTH = 'CHECKED_AUTH';
export const TOKEN_LOAD = 'TOKEN_LOAD';

export const getUser = state => state.user;
export const getToken = state => state.token;
export const getCheckedAuth = state => {
  const user = getUser(state);
  if(user === PENDING_USER) return false;
  return user === null || !!getToken(state);
};
export const PENDING_USER = {}; 

export function user(state = PENDING_USER, { type, payload }) {
  switch(type) {
    case USER_AUTH:
      return payload;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}

export function token(state = '', { type, payload }) {
  if(type === TOKEN_LOAD) return  payload;
  if(type === LOGOUT) return '';
  return state;
}