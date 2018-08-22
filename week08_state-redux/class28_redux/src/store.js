import { createStore } from 'redux';
import { animals } from './components/animals/reducers';

const store = createStore(animals);

export default store;