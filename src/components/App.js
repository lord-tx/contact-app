import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 package
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    const newContact = { ...contact, id: uuidv4() }; // Generate a new UUID for the contact
    setContacts([...contacts, newContact]);
  };

  const removeContactHandler = (id) => {
    const newContactsList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactsList);
  };

  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      console.log('Retrieved Contacts:', retrieveContacts);
      if (retrieveContacts) setContacts(retrieveContacts);
      didMountRef.current = true;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Router>
        <Header />
        <Routes> {/* Wrap your routes in the <Routes> component */}
          <Route
            path="/"
            element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} // Use 'element' prop to render components
          />
          <Route
            path="/add"
            element =  {<AddContact addContactHandler={addContactHandler} />} // Use 'element' prop to render components
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
