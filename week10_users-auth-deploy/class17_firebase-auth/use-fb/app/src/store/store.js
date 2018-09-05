import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promise-middleware';
import { error, loading } from '../components/app/reducers';
import { user, token } from '../components/auth/reducers';
import { petList, petsById } from '../components/pets/reducers';

const rootReducer = combineReducers({
  error,
  loading,
  user,
  token,
  petList,
  petsById
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware
    )
  )
);

export default store;