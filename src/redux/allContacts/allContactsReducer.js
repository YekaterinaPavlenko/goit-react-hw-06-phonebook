import { createReducer } from '@reduxjs/toolkit';
import * as contactsActions from './allContactsAction';

const formSubmitHandler = (state, action) => {
  let existName = state.find(
    contact => contact.name.toLowerCase() === action.payload.name.toLowerCase(),
  );
  let existNumber = state.find(
    contact =>
      contact.number.toLowerCase() === action.payload.number.toLowerCase(),
  );
  let existContact = (existName && 'name') || (existNumber && 'number');
  return existName || existNumber
    ? alert(`The ${existContact} is already in contacts.`)
    : [...state, action.payload];
};

const allContactsReducer = createReducer([], {
  [contactsActions.getAllContacts]: (state, action) => [...action.payload],
  [contactsActions.addContact]: (state, action) =>
    formSubmitHandler(state, action),
  [contactsActions.deleteContact]: (state, action) =>
    state.filter(elem => elem.id !== action.payload),
});

export default allContactsReducer;

///////without toolkit
// import * as contactsActionTypes from './allContactsTypes';

// const allContactsReducer = (state = [], action) => {
//   // console.log(action);
//   // console.log(state);
//   switch (action.type) {
//     case contactsActionTypes.GET_CONTACTS:
//       // console.log('GET_CONTACT');
//       const firstState = [...action.payload];
//       return firstState;
//     case contactsActionTypes.ADD_CONTACT:
//       // console.log('ADD_CONTACT');
//       const newState = [...state, action.payload];
//       return newState;
//     case contactsActionTypes.DELETE_CONTACT:
//       // console.log('DELETE_CONTACT');
//       const deletedState = state.filter(elem => elem.id !== action.payload);
//       return deletedState;

//     default:
//       return state;
//   }
// };
// export default allContactsReducer;
