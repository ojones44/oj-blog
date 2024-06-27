// react imports
import { RouterProvider } from 'react-router-dom';
import { router as BlogRouter } from '@/router/blogRouter';

export const WrappedApp = () => <RouterProvider router={BlogRouter} />;
