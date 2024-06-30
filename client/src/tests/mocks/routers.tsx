import type { RouteObject } from 'react-router-dom';
import { BlogLayout } from '@/pages';

export const mockNavBarComponent: RouteObject[] = [
  {
    path: '/',
    element: <BlogLayout />,
    errorElement: <div>Error el</div>,
    children: [
      {
        index: true,
        element: <div>Blog</div>,
      },
      {
        path: 'socials',
        element: <div>Socials</div>,
      },
      {
        path: 'settings',
        element: <div>Settings</div>,
      },
      {
        path: 'posts/:id',
        element: <div>Post</div>,
      },
    ],
  },
];
