import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactsForm/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { connect } from 'react-redux';
import * as allContactsAction from './redux/allContacts/allContactsAction';

class App extends Component {
  componentDidMount() {
    // console.log('я родился');
    const dataFromLocalStorage = localStorage.getItem('contacts');
    // console.log(dataFromLocalStorage);
    if (dataFromLocalStorage) {
      const contactsFromLS = JSON.parse(dataFromLocalStorage);
      // console.log(contactsFromLS);
      this.props.getContacts(contactsFromLS);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('я обновился');
    const { contacts } = this.props;
    if (contacts !== prevProps.contacts) {
      // console.log(contacts);
      localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    }
  }

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
