import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// Component imports
import { Post } from '@/components';
import { dateFormatter } from '@/utils/dataFormatter';

const testPost = {
  id: '1',
  title: 'React Applications',
  date: '2024-09-21T14:25:00Z',
  length: 4,
  preview:
    'React is a free and open-source front-end JavaScript library for building user interfaces based on components.',
  categories: ['coding', 'framework', 'life'],
  image: '/react-logo.png',
};

it('renders post component correctly', () => {
  render(<Post post={testPost} />);

  const postTitle = screen.getByRole('heading', { name: /react/i, level: 2 });
  expect(postTitle).toBeInTheDocument();
  expect(postTitle).toHaveTextContent('React Applications');
  expect(postTitle).toHaveAttribute('id', 'title');

  const infoSection = screen.getByTestId('timestamps');
  expect(infoSection).toBeInTheDocument();
  expect(infoSection).toHaveClass('info');
  expect(infoSection.childElementCount).toBe(3);
  expect(infoSection.firstChild?.textContent).toEqual(
    `📅 ${dateFormatter(testPost.date)}`
  );
  expect(infoSection.lastChild).toHaveTextContent(`${testPost.length}`);

  const previewSection = screen.getByTestId('preview');
  expect(previewSection).toBeInTheDocument();
  expect(previewSection).toHaveAttribute('id', 'preview');
  expect(previewSection).toHaveTextContent(testPost.preview);

  const categorySection = screen.getByTestId('categories');
  expect(categorySection).toBeInTheDocument();
  expect(categorySection).toHaveClass('categories');
  expect(categorySection.childElementCount).toBe(testPost.categories.length);

  const categoryContent = [...categorySection.childNodes].map(
    (el) => el.textContent
  );
  expect(categoryContent).toEqual(testPost.categories);

  const postImgEl = screen.getByRole('img');
  expect(postImgEl).toBeInTheDocument();
  expect(postImgEl).toHaveAttribute('src', testPost.image);
  expect(postImgEl).toHaveAttribute('alt', 'react-logo');
});
