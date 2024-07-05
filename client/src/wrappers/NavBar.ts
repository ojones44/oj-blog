import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  /* position: fixed;
  overflow: hidden; */
`;

export const LeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  .links a {
    margin-right: 1rem;
  }

  .blog-name {
    font-size: 2rem;
  }
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NavBarThemeToggler = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const NavBarSocials = styled.div`
  display: flex;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: var(--theme-clr-accent);

  &.active {
    border-bottom: 1px solid var(--theme-clr-secondary);
  }
`;
