import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import React from 'react';
import UserMenu from './UserMenu';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import styles from './AppBar.module.css';

export default function AppBar() {
    const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
    return (
        <header className={styles.page__header}>
            <Navigation />
            {isAuthenticated ? <UserMenu /> : <AuthNav />}
        </header>
    );
}
