import { createStore } from 'redux';
import { animals } from './components/animals/reducers';
// switch to this import to run counter demo
// import { count } from './components/demo/reducers';

const store = createStore(
  animals,
  // switch for counter demo
  // count,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;