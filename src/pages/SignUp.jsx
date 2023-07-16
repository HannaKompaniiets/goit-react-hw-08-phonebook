
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginNavigate = () => {
    navigate('/users/login');
  };

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'name':
  //       return setName(value);
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <div>
      <h1> Please sign up!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {' '}
          Enter your name
          <input type="name" name="name"></input>
        </label>
        <label>
          {' '}
          Enter your email
          <input type="email" name="email" ></input>
        </label>
        <label>
          Enter your password
          <input type="password" name="password" ></input>
        </label>
        <button type="button">Registrate</button>
      </form>
      <button type="button" onClick={handleLoginNavigate}>
        Go to login page
      </button>
    </div>
  );
};

export default SignUp;
