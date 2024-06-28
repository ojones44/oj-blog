// util imports
import { FiGithub } from 'react-icons/fi';
import { RiLinkedinFill, RiTwitterXLine } from 'react-icons/ri';
import { MdOutlineLightMode } from 'react-icons/md';
import { FaRegMoon } from 'react-icons/fa';
import { navLinks } from '@/utils/navLinks';

// component imports
import { Toggle as ThemeToggle } from '@/components/Toggle';

// style components
import {
  NavBar,
  LeftNav,
  RightNav,
  NavItem,
  NavBarThemeToggler,
  NavBarSocials,
} from '@/wrappers/NavBar';

export const Navigation = () => (
  <NavBar>
    <LeftNav>
      <div>OJBlog</div>
      <div>
        {navLinks.map((link) => (
          <NavItem key={link.name} to={link.to}>
            {link.name}
          </NavItem>
        ))}
      </div>
    </LeftNav>
    <RightNav>
      <NavBarThemeToggler>
        <FaRegMoon />
        <ThemeToggle />
        <MdOutlineLightMode />
      </NavBarThemeToggler>
      <NavBarSocials>
        <FiGithub />
        <RiLinkedinFill />
        <RiTwitterXLine />
      </NavBarSocials>
    </RightNav>
  </NavBar>
);
