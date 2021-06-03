import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';

// Components
import AppBar from './component/userMenu/AppBar';
import routes from './routes';
import PrivateRoute from './component/userMenu/PrivateRoute';
import PublicRoute from './component/userMenu/PublicRoute';
import { authOperations } from './redux/auth';
import { useDispatch } from 'react-redux';

// Lazy load
const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authOperations.getCurrentUser());
    }, [dispatch]);

    return (
        <>
            <AppBar />

            <Suspense fallback={<h1>Загружаем!</h1>}>
                <Switch>
                    <PublicRoute exact path={routes.home}>
                        <HomeView />
                    </PublicRoute>
                    <PublicRoute
                        restricted
                        redirectTo="/contacts"
                        path={routes.register}
                    >
                        <RegisterView />
                    </PublicRoute>
                    <PublicRoute
                        restricted
                        redirectTo="/contacts"
                        path={routes.login}
                    >
                        <LoginView />
                    </PublicRoute>
                    <PrivateRoute path={routes.contacts}>
                        <ContactsView />
                    </PrivateRoute>
                </Switch>
            </Suspense>
        </>
    );
}
