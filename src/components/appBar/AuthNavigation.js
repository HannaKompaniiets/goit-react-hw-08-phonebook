import { React} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AuthNavigation = () => {
  const StyledLink = styled(NavLink)`
    color: #fff;

    &.active {
      color: orange;
    }
  `;

  const navItems = [
    {label: "Login", link: "/users/login"},
    {label: "Sign UP", link: "/users/signup"}
  ];

  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      {navItems.map(item => (
        <Button
          key={item.label}
          LinkComponent={StyledLink}
          to={item.link}
          sx={{ color: '#fff' }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
};
export default AuthNavigation;
