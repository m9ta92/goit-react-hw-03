// imports
import { useState, useEffect } from 'react';

import ContactForm from '../ContactForm/ContactForm.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';

import { nanoid } from 'nanoid';

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  // Initialization of data from local storage when loading a component
  useEffect(() => {
    const savedContacts = localStorage.getItem('contactsValue');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  // Saving statistics to local storage every time the data changes
  useEffect(() => {
    const stringifiedContacts = JSON.stringify(filteredContacts);
    localStorage.setItem('filteredContacts', stringifiedContacts);
  }, [contacts]);

  // Function to update the filter
  const handleChange = event => {
    setFilter(event.target.value);
  };

  // Contact filtering logic (case insensitive)
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  //
  const onAddContact = formData => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    };

    setContacts(prevState => [...prevState, finalContact]);
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={onAddContact} />
        <SearchBox filterValue={filter} handleChange={handleChange} />
        <ContactList contacts={filteredContacts} />
      </div>
    </>
  );
}

export default App;
