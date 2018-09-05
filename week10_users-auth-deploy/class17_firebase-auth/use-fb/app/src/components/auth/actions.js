import { USER_AUTH, TOKEN_LOAD, LOGOUT } from './reducers';
import { auth } from '../../services/firebase';

export const initAuth = () => {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      if(!user) return dispatch({ type: LOGOUT });

      dispatch({ type: USER_AUTH, payload: user });
      
      dispatch({
        type: TOKEN_LOAD,
        payload: auth.currentUser.getIdToken()
      });
    });
  };
};

export const logout = () => {
  auth.signOut();
};