// react imports
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

// Page Imports
import {
  BlogLayout,
  Blog,
  Socials,
  Settings,
  ViewPost,
  NotFound,
} from '@/pages';

export const blogRoutesConfig: RouteObject[] = [
  {
    path: '/',
    element: <BlogLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Blog />,
      },
      {
        path: 'socials',
        element: <Socials />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'posts/:id',
        element: <ViewPost />,
      },
    ],
  },
];

export const router = createBrowserRouter(blogRoutesConfig);
