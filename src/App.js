import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactsForm/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { connect } from 'react-redux';
import * as allContactsAction from './redux/allContacts/allContactsAction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    contacts: store.contacts.items,
  };
};
const mapDispatchToProps = {
  getContacts: allContactsAction.getAllContacts,
  addContact: allContactsAction.addContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
