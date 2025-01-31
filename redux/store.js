import { createStore } from 'redux';
import formReducer  from './reducers/formReducer';

const store = createStore(formReducer);

export default store;

// import { combineReducers } from 'redux';
// import formReducer from './reducers/formReducer';

// const rootReducer = combineReducers({
//     formReducer: formReducer,
//   // other reducers...
// });

// export default rootReducer;
