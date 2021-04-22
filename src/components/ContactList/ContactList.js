import React, { Component } from 'react';
import { connect } from 'react-redux';
import ls from './ContactList.module.css';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';
class ContactList extends Component {
  render() {
    // console.log(this.props);
    const { contacts } = this.props;
    // console.log(contacts);
    return (
      <ul className={ls.list}>
        {contacts.length > 0 ? (
          <ContactItem contacts={contacts} />
        ) : (
          <p>You have no contacts</p>
        )}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
};
const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return visibleContacts;
};
const mapStateToProps = store => {
  const { filter, items } = store.contacts;
  // console.log(items);
  const visibleContacts = getVisibleContacts(items, filter);
  return {
    contacts: visibleContacts,
  };
};

export default connect(mapStateToProps, null)(ContactList);
