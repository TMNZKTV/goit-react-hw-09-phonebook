import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

// Если маршрут приватный и пользователь залогинен - рендер компонента
// Если нет - отправка на Логин

export default function PrivateRoute({
    children,
    isAuthenticated,
    ...routeProps
}) {
    const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

    return (
        <Route {...routeProps}>
            {' '}
            {isLoggedIn ? children : <Redirect to="/login/>" />}
        </Route>
    );
}
