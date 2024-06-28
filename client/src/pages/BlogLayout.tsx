// react imports
import { Outlet } from 'react-router-dom';

// component imports
import { Navigation } from '@/components';

export const BlogLayout = () => (
  <>
    <Navigation />
    <Outlet />
  </>
);
