import AppBar from './appBar/AppBar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Contacts from 'pages/Contacts';
import Home from 'pages/Home';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import { fetchCurrentUser } from '../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import authSelectors from 'redux/auth/auth-selectors';
import NotFound from 'pages/NotFound';
import ProtectedRoute from './appBar/ProtectedRoute';
import Loader from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchitcCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

   if (isFetchitcCurrentUser) {
     return <Loader />;
   }

  return (
    <div>
        <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Contacts />
            </ProtectedRoute>
          }
        />
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
