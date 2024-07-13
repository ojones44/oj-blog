import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--nav-height);
  padding-inline: 1rem;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(10px);
  background-color: var(--theme-clr-base);
  transition: all 0.2s linear;

  &.separator {
    box-shadow: 1px 7px 10px -3px var(--box-shadow-hover);
  }
`;

export const LeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  .links a {
    margin-right: 1rem;
  }

  .blog-name {
    font-size: 1.75rem;
    font-weight: var(--fw-bold);
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
  gap: 1rem;

  .toggler {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .theme-modal {
    position: absolute;
    top: 100%;
    outline: none;
    border: none;
    color: inherit;
    background-color: var(--theme-clr-base);
    /* background-color: red; */
    padding: 1rem 2rem;
    border-radius: var(--border-radius);
    box-shadow: 1px 7px 10px -3px var(--box-shadow-hover);
  }

  .theme-option {
    display: block;
    padding: 0.25rem 0.75rem;
    border-radius: var(--border-radius);
    margin-bottom: 0.5rem;
  }

  .theme-option:hover {
    transition: var(--transition-200);
    background-color: var(--theme-clr-primary);
  }
`;

export const NavBarSocials = styled.div`
  display: flex;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: var(--theme-clr-accent);
  font-weight: var(--fw-semibold);

  &.active {
    border-bottom: 2px solid var(--theme-clr-secondary);
  }

  &:hover {
    border-bottom: 1px solid var(--theme-clr-neutral);
  }
`;
