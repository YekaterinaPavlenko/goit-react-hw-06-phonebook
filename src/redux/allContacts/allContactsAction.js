import * as contactsActionTypes from './allContactsTypes';

export const getAllContacts = contacts => {
  return {
    type: contactsActionTypes.GET_CONTACTS,
    payload: contacts,
  };
};

export const addContact = contact => {
  return {
    type: contactsActionTypes.ADD_CONTACT,
    payload: contact,
  };
};
export const deleteContact = id => {
  return {
    type: contactsActionTypes.DELETE_CONTACT,
    payload: id,
  };
};
