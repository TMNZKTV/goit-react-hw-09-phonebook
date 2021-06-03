import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './LoginForm.module.css';

export default function LoginForm() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const updateEmail = event => {
        setEmail(event.currentTarget.value);
    };

    const updatePassword = event => {
        setPassword(event.currentTarget.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        dispatch(authOperations.logIn({ email, password }));

        setEmail('');
        setPassword('');
    };

    return (
        <>
            <h1 className={styles.title}>This is Login Page</h1>

            <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className={styles.form}
            >
                <label className={styles.label}>
                    <span className={styles.label__text}> Email </span>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={updateEmail}
                    />
                </label>

                <label className={styles.label}>
                    <span className={styles.label__text}> Password </span>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={updatePassword}
                    />
                </label>
                <button type="submit" className={styles.login__button}>
                    Login
                </button>
            </form>
        </>
    );
}
