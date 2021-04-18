import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import allContactsReducer from './allContacts/allContactsReducer';
import filterContactsReducer from './filter/filterContactsReducers';

console.log(getDefaultMiddleware);
const middleware = [...getDefaultMiddleware, logger];
const myContactsReducer = combineReducers({
  items: allContactsReducer,
  filter: filterContactsReducer,
});

// const rootReducer = combineReducers({
//   contacts: myContactsReducer,
// });
const store = configureStore({
  reducer: {
    contacts: myContactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
export default store;
