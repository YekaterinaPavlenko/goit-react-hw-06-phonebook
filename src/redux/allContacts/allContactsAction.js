import { createAction } from '@reduxjs/toolkit';

export const getAllContacts = createAction('GET_CONTACTS');
export const addContact = createAction('ADD_CONTACT');
export const deleteContact = createAction('DELETE_CONTACT');

/////without toolkit
// import * as contactsActionTypes from './allContactsTypes';
// export const getAllContacts = contacts => {
//   return {
//     type: contactsActionTypes.GET_CONTACTS,
//     payload: contacts,
//   };
// };
// export const addContact = contact => {
//   return {
//     type: contactsActionTypes.ADD_CONTACT,
//     payload: contact,
//   };
// };
// export const deleteContact = id => {
//   return {
//     type: contactsActionTypes.DELETE_CONTACT,
//     payload: id,
//   };
// };
