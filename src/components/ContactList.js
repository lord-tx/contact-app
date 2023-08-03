import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.contacts.map((contact, index) => {
        return (
            <ContactCard key={index} contact={contact}></ContactCard>
        );
    });
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
}

export default ContactList;