import * as filterActionTypes from './filterActionTypes';

const init = '';

const filterContactsReducer = (state = init, action) => {
  // console.log(action);
  switch (action.type) {
    case filterActionTypes.FILTER_CONTACT:
      const filteredState = action.payload;
      return filteredState;
    default:
      return state;
  }
};
export default filterContactsReducer;
