import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from '../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import authSelectors from 'redux/auth/auth-selectors';
import NotFound from 'pages/NotFound';
import { RestrictedRoute } from './appBar/RestrictedRoute';
import Loader from './Loader/Loader';
import { PrivateRoute } from './appBar/PrivateRoute';
import Layout from './Layout/Layout';


const HomePage = lazy(() => import('../pages/Home'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const RegisterPage = lazy(() => import('../pages/SignUp'));

function App() {
  const dispatch = useDispatch();
  const isfetchCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      {!isfetchCurrentUser ? (
        <>
          {' '}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="/contacts"
                element={<PrivateRoute component={<ContactsPage />} />}
              />
              <Route
                path="/users/signup"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<RegisterPage />}
                  />
                }
              />
              <Route
                path="/users/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LoginPage />}
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>{' '}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
