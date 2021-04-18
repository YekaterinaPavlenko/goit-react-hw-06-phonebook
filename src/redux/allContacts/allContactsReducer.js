import * as contactsActionTypes from './allContactsTypes';

const allContactsReducer = (state = [], action) => {
  // console.log(action);
  // console.log(state);
  switch (action.type) {
    case contactsActionTypes.GET_CONTACTS:
      // console.log('GET_CONTACT');
      const firstState = [...action.payload];
      return firstState;
    case contactsActionTypes.ADD_CONTACT:
      // console.log('ADD_CONTACT');
      const newState = [...state, action.payload];
      return newState;
    case contactsActionTypes.DELETE_CONTACT:
      // console.log('DELETE_CONTACT');
      const deletedState = state.filter(elem => elem.id !== action.payload);
      return deletedState;

    default:
      return state;
  }
};
export default allContactsReducer;
