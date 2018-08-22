import { createStore } from 'redux';
import { animals } from './components/animals/reducers';

const store = createStore(
  animals,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;