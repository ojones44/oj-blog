// component imports
import { FiGithub } from 'react-icons/fi';
import { IoSearchSharp } from 'react-icons/io5';
import { MdOutlineLightMode } from 'react-icons/md';
import { RiLinkedinFill, RiTwitterXLine } from 'react-icons/ri';
import { FaRegMoon } from 'react-icons/fa';
import type { NavProps } from '@/types/Navigation';
import { Toggle as ThemeToggle, LinkNewTab, ThemeSelect } from '@/components';

// hook imports
import { useCheckNavSeparator } from '@/hooks/useCheckNavSeparator';

// util imports
import { navLinks } from '@/utils/navLinks';

// styled components
import {
  NavBar,
  LeftNav,
  RightNav,
  NavItem,
  NavBarThemeToggler,
  NavBarSocials,
} from '@/wrappers/NavBar';

export const Navigation = ({ setTheme }: NavProps): JSX.Element => {
  const [navSeparator] = useCheckNavSeparator();

  return (
    <NavBar className={navSeparator ? 'separator' : ''}>
      <LeftNav>
        <div className="blog-name">OJBLOG</div>
        <div className="links">
          {navLinks.map((link) => (
            <NavItem key={link.name} to={link.to}>
              {link.name}
            </NavItem>
          ))}
        </div>
      </LeftNav>
      <RightNav>
        <div className="icon">
          <IoSearchSharp title="search-icon" />
        </div>
        <NavBarThemeToggler>
          <MdOutlineLightMode title="theme-icon" />
          <ThemeToggle toggleHandler={setTheme} />
          <FaRegMoon title="theme-icon" />
          <ThemeSelect />
        </NavBarThemeToggler>
        <NavBarSocials>
          <LinkNewTab href="https://github.com/ojones44">
            <FiGithub title="social-link" />
          </LinkNewTab>
          <LinkNewTab href="https://www.linkedin.com/in/oliverj1994">
            <RiLinkedinFill title="social-link" />
          </LinkNewTab>
          <LinkNewTab href="https://x.com/oliverj1994">
            <RiTwitterXLine title="social-link" />
          </LinkNewTab>
        </NavBarSocials>
      </RightNav>
    </NavBar>
  );
};
