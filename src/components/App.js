import React from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const Contacts = [
    {
      "id" : 1,
      "name": "Mark",
      "email": "mark@email.com"
    },
    {
      "id" : 2,
      "name": "Jordan",
      "email": "jordan@email.com"
    }
  ]

  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts={Contacts}/>
    </div>
  );
}

export default App;
