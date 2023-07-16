import { React} from 'react';
import Navigation from './Navigation';
import AuthNavigation from './AuthNavigation';
import { UserInfo } from './UserInfo/UserInfo';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header>
      <Navigation />
      {!isLoggedIn ? <AuthNavigation /> : <UserInfo />}
    </header>
  );
};
export default AppBar;
