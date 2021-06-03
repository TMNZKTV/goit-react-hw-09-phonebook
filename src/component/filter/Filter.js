import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { changeFilter } from '../../redux/phonebook/Phonebook-actions';
import { PhonebookSelectors } from '../../redux/phonebook';

import styles from '../filter/Filter.module.css';

export default function Filter() {
    const dispatch = useDispatch();

    const value = useSelector(PhonebookSelectors.getFilter);

    const OnChange = event => dispatch(changeFilter(event.currentTarget.value));

    return (
        <label className={styles.filter}>
            Find contacts by name
            <input
                className={styles.filter__input}
                type="text"
                name="search"
                value={value}
                onChange={OnChange}
            />
        </label>
    );
}

Filter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
};
