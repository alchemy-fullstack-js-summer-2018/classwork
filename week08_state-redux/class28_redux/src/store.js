import { createStore } from 'redux';
import { count } from './components/demo/reducers';



const store = createStore(count);

export default store;