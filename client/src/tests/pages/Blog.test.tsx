import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// Component imports
import { Blog } from '@/pages';
import { testPosts } from '../mocks/handlers';

it('renders post component correctly', async () => {
  render(<Blog />);

  const posts = await screen.findAllByTestId('blog-post');
  expect(posts.length).toBe(testPosts.length);
});
