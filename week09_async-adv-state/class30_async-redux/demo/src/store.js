import { createStore, combineReducers } from 'redux';
import { animals } from './components/animals/reducers';
import { count } from './components/demo/reducers';

const rootReducer = combineReducers({
  animals,
  count
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;