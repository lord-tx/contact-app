import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        console.log(id);
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact, index) => {
        return (
            <ContactCard key={index} contact={contact} clickHandler={deleteContactHandler}></ContactCard>
        );
    });
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
}

export default ContactList;