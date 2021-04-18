import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactsForm/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { connect } from 'react-redux';
import * as allContactsAction from './redux/allContacts/allContactsAction';
// import * as filterContactsAction from './redux/filter/filterContactsAction';

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
  formSubmitHandler = data => {
    // console.log(data);
    const { contacts } = this.props;
    let existName = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase(),
    );
    let existNumber = contacts.find(
      contact => contact.number.toLowerCase() === data.number.toLowerCase(),
    );
    let existContact = (existName && 'name') || (existNumber && 'number');
    // console.log(existContact);

    existName || existNumber
      ? alert(`The ${existContact} is already in contacts.`)
      : this.props.addContact(data);
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
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
