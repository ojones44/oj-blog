import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.nav``;

export const LeftNav = styled.div``;

export const RightNav = styled.div``;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    border-bottom: 1px solid black;
  }
`;
