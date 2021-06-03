import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filter from '../filter/Filter';
import { PhonebookOperations, PhonebookSelectors } from '../../redux/phonebook';

import styles from '../contactForm/ContactForm.module.css';

export default function ContactForm() {
    const dispatch = useDispatch();

    const allContacts = useSelector(PhonebookSelectors.getAllContacts);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChangeName = event => {
        setName(event.currentTarget.value);
    };
    const handleChangeNumber = event => {
        setNumber(event.currentTarget.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        reset();

        if (checkDuplicateContacts({ name, number })) {
            return;
        }

        dispatch(PhonebookOperations.addContact({ name, number }));
    };

    const checkDuplicateContacts = newContact => {
        const isDuplicateNumber = allContacts.find(
            ({ number }) => number === newContact.number,
        );
        const isDuplicateName = allContacts.find(
            ({ name }) => name.toLowerCase() === newContact.name.toLowerCase(),
        );

        if (isDuplicateNumber || isDuplicateName) {
            alert('This number is already in contacts.');
            return true;
        }
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <>
            <h1 className={styles.title}>Add new contact</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.label}>
                    <span className={styles.label__text}>Name</span>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={name}
                        onChange={handleChangeName}
                    />
                </label>

                <label className={styles.label}>
                    <span className={styles.label__text}>Number</span>
                    <input
                        type="tel"
                        name="number"
                        // pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                        required
                        value={number}
                        onChange={handleChangeNumber}
                    />
                </label>

                <div>
                    <button className={styles.form__button} type="submit">
                        Add contact
                    </button>
                </div>
            </form>

            <Filter />
        </>
    );
}
