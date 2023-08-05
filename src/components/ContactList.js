import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        console.log(id);
        props.getContactId(id);
    }

    const navigateToAddContact = () => {
        console.log(props);
    }

    const renderContactList = props.contacts.map((contact, index) => {
        return (
            <ContactCard key={index} contact={contact} clickHandler={deleteContactHandler}></ContactCard>
        );
    });
    return (
        <div className="ui centered container">
            <h2 className="ui float left"> Contacts List </h2>
            <div className="ui huge primary button" onClick={navigateToAddContact}>Add Contact <i className="add icon"></i></div>
            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
    );
}

export default ContactList;