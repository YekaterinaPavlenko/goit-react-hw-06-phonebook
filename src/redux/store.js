// import { combineReducers } from 'redux';
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import allContactsReducer from './allContacts/allContactsReducer';
import filterContactsReducer from './filter/filterContactsReducers';

const defaultMiddlewares = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});
// console.log(defaultMiddlewares);
const middleware = [...defaultMiddlewares, logger];

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };
const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: 'filter', ///записывает в локал стораж, но блокирует запись фильтра в лс
};
const myContactsReducer = combineReducers({
  items: allContactsReducer,
  filter: filterContactsReducer,
});

const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, myContactsReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
///without toolkit
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
// export default { store, persistor };
