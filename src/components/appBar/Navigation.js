import { React} from 'react';
import { useSelector } from 'react-redux';
import { NavLink} from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import styled from 'styled-components';

const Navigation = () => {
  const StyledLink = styled(NavLink)`
    color: black;

    &.active {
      color: orange;
    }
  `;
    
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
      </nav>
      
  );
};
export default Navigation;
