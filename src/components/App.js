import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]); 

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
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
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
