// util imports
import { FiGithub } from 'react-icons/fi';
import { RiLinkedinFill, RiTwitterXLine } from 'react-icons/ri';
import { navLinks } from '@/utils/navLinks';

// component imports
import { Toggle as ThemeToggle } from '@/components/Toggle';

// style components
import { NavBar, LeftNav, RightNav, NavItem } from '@/wrappers/NavBar';

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
      <ThemeToggle />
      <div>
        <FiGithub />
        <RiLinkedinFill />
        <RiTwitterXLine />
      </div>
    </RightNav>
  </NavBar>
);
