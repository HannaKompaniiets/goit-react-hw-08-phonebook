import  { logIn } from '../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
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
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <h1> Please login!</h1>

      <form onSubmit={handleSubmit}>
        <label>
          {' '}
          Enter your email
          <input type="email" name="email"></input>
        </label>
        <label>
          Enter your password
          <input type="password" name="password"></input>
        </label>
        <button type="button">Login</button>
      </form>
    </div>
  );
};

export default Login;
