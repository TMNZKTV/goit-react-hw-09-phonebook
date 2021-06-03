import React from 'react';
import { Link } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import routes from '../../routes';
import { useSelector } from 'react-redux';
import styles from './Navigation.module.css';

export default function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

    return (
        <nav className={styles.nav}>
            <Link to={routes.home} className={styles.nav__link}>
                Main
            </Link>
            {isLoggedIn && (
                <Link to={routes.contacts} className={styles.nav__link}>
                    Contacts
                </Link>
            )}
        </nav>
    );
}
