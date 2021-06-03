import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './RegisterForm.module.css';

export default function RegisterView() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const updateName = event => {
        setName(event.target.value);
    };

    const [email, setEmail] = useState('');
    const updateEmail = event => {
        setEmail(event.target.value);
    };

    const [password, setPassword] = useState('');
    const updatePassword = event => {
        setPassword(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        setName('');
        setEmail('');
        setPassword('');
        dispatch(authOperations.register({ name, email, password }));
    };

    return (
        <>
            <h1 className={styles.title}>This is Register Page</h1>

            <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className={styles.form}
            >
                <label className={styles.label}>
                    <span className={styles.label__text}> Name </span>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={updateName}
                    />
                </label>
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

                <button type="submit" className={styles.register__button}>
                    Зарегистрироваться
                </button>
            </form>
        </>
    );
}
