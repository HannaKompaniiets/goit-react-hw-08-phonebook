
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { useState } from 'react';

const SignUp = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const isAuthError = useSelector(authSelectors.getIsAuthError);

 const handleLoginNavigate = () => {
   navigate('/users/login');
 };

  const handleRegister = (e) => {
       e.preventDefault();
   dispatch(register({ email, password, name }));
   setName('');
   setEmail('');
   setPassword('');
  };
  

  return (
    <div>
      <h1> Please sign up!</h1>
      <form onSubmit={handleRegister}>
        <label>
          {' '}
          Enter your name
          <input
            type="text"
            name="name"
            placeholder="Please enter your name"
            value={name}
            onChange={event => setName(event.target.value)}
          ></input>
        </label>
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
        <button type="submit">Registrate</button>
        {isAuthError && <div>Error occurred while register</div>} 
      </form>
      <button type="button" onClick={handleLoginNavigate}>
        Go to login page
      </button>
    </div>
  );
};

export default SignUp;
