import { React} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AuthNavigation = () => {
  const StyledLink = styled(NavLink)`
    color: black;

    &.active {
      color: orange;
    }
  `;

  return (
    <div>
      <StyledLink to="/users/login">Login</StyledLink>

      <StyledLink to="/users/signup">Sign UP</StyledLink>
    </div>
  );
};
export default AuthNavigation;
