import { createStore } from 'redux';
import { formReducer } from './reducer';

const store = createStore(formReducer);

export default store;
