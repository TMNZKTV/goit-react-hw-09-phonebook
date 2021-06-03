import React from 'react';
import ContactList from '../component/contactList/ContactList';
import ContactForm from '../component/contactForm/ContactForm';
import Container from '../component/container/Container';

const ContactsView = () => {
    return (
        <Container>
            <ContactForm />
            <ContactList />
        </Container>
    );
};

export default ContactsView;
