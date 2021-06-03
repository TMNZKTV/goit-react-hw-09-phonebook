import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { PhonebookOperations, PhonebookSelectors } from '../../redux/phonebook';

import styles from '../contactList/ContactList.module.css';

export default function ContactList() {
    const dispatch = useDispatch();

    const DeleteContact = id => dispatch(PhonebookOperations.deleteContact(id));

    const items = useSelector(PhonebookSelectors.getVisibleContacts);
    const isLoadingContacts = useSelector(PhonebookSelectors.getLoading);

    useEffect(() => {
        dispatch(PhonebookOperations.fetchContacts());
    }, [dispatch]);

    return (
        <div className={styles.contacts}>
            <ul className={styles.contacts__list}>
                {isLoadingContacts && <h1>Загружаем...</h1>}
                {items.map(({ id, name, number }) => {
                    return (
                        <li className={styles.contacts__item} key={id}>
                            <span>
                                {name} : {number}
                            </span>
                            <button
                                className={styles.contacts__button}
                                onClick={() => DeleteContact(id)}
                            >
                                Удалить
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

ContactList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
    onDeleteContact: PropTypes.func,
};
