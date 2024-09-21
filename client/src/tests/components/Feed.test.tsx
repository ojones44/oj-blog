import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// Component imports
import { Feed } from '@/components';

const testPosts = [
  {
    id: '1',
    title: 'First Post',
    date: '2024-09-21T14:25:00Z',
    length: 4,
    preview: 'First post preview text',
    categories: ['coding', 'life'],
    image: '/react-logo.png',
  },
  {
    id: '2',
    title: 'Second Post',
    date: '2024-10-12T14:25:00Z',
    length: 10,
    preview: 'First post preview text',
    categories: ['framework', 'life'],
    image: '/react-logo.png',
  },
  {
    id: '3',
    title: 'Third Post',
    date: '2024-10-12T14:25:00Z',
    length: 10,
    preview: 'First post preview text',
    categories: ['framework', 'life'],
    image: '/react-logo.png',
  },
];

it('renders post component correctly', () => {
  render(<Feed posts={testPosts} />);

  const postHeadings: HTMLHeadingElement[] = screen.getAllByRole('heading', {
    level: 2,
  });

  expect(postHeadings.length).toBe(testPosts.length);

  postHeadings.forEach((post, i) => {
    expect(post).toHaveTextContent(testPosts[i].title);
  });
});
