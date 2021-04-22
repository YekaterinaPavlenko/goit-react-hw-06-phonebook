import { createReducer } from '@reduxjs/toolkit';
import * as filterActions from './filterContactsAction';

const filterContactsReducer = createReducer('', {
  [filterActions.changeFilter]: (state, action) => action.payload,
});

export default filterContactsReducer;

////////////without toolkit
// import * as filterActionTypes from './filterActionTypes';

// const filterContactsReducer = (state = '', action) => {
//   // console.log(action);
//   switch (action.type) {
//     case filterActionTypes.FILTER_CONTACT:
//       const filteredState = action.payload;
//       return filteredState;
//     default:
//       return state;
//   }
// };
// export default filterContactsReducer;
