import { useNavigate } from 'react-router-dom';
import { logIn } from '../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { useState } from 'react';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isAuthError = useSelector(authSelectors.getIsAuthError);

  const handleSignupNavigate = () => {
    navigate('/users/signup');
  };

  const handleLogin = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1> Please login!</h1>

      <form onSubmit={handleLogin}>
        <label>
          {' '}
          Enter your email
          <input
            type="email"
            name="email"
            placeholder="Please enter your email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          ></input>
        </label>
        <label>
          Enter your password
          <input
            type="password"
            name="password"
            placeholder="Please enter your password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          ></input>
        </label>
        <button type="submit">Login</button>
        {isAuthError && <div>Error occurred while logging in</div>}
      </form>
      <button type="button" onClick={handleSignupNavigate}>
        Go to register page
      </button>
    </div>
  );
};

export default Login;
