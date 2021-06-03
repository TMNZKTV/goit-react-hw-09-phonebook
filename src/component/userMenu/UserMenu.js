import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { authOperations } from '../../redux/auth';
import defaultAvatar from '../userMenu/profile-default-image.jpg';
import styles from './UserMenu.module.css';

export default function UserMenu() {
    const dispatch = useDispatch();

    const name = useSelector(authSelectors.getUserName);

    const onLogOut = useCallback(() => dispatch(authOperations.logOut()), [
        dispatch,
    ]);

    return (
        <div className={styles.user__card}>
            <img src={defaultAvatar} alt="avatar" width="15" />
            <span className={styles.user__name}>Welcome, {name}</span>
            <button onClick={onLogOut} className={styles.logout__button}>
                Logout
            </button>
        </div>
    );
}
