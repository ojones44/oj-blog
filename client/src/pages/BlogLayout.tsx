// react imports
import { Outlet } from 'react-router-dom';

// component imports
import { NavBar } from '@/components';

export const BlogLayout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);
