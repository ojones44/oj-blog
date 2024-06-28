// testing library imports
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// util imports
import { navLinks } from '@/utils/navLinks';
import { blogRoutesConfig } from '@/router/blogRouter';

const router = createMemoryRouter(blogRoutesConfig, {
  initialEntries: ['/'],
});

describe('NavBar functionality', () => {
  it('has correct title', () => {
    render(<RouterProvider router={router} />);

    const title = screen.getByText(/ojblog/i);

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('OJBlog');
  });

  it('displays correct links from array', () => {
    render(<RouterProvider router={router} />);
    navLinks.forEach((link) =>
      expect(screen.getByText(link.name)).toBeInTheDocument()
    );
  });

  it('navigates to correct pages', async () => {
    const user = userEvent.setup();
    const getCurrentUrl = () => router.state.location.pathname;
    render(<RouterProvider router={router} />);
    expect(getCurrentUrl()).toBe('/');

    const linkElements = await screen.findAllByRole('link');

    linkElements.forEach(async (link) => {
      await user.click(link);
      expect(getCurrentUrl()).toBe((link as HTMLAnchorElement).pathname);
    });
  });
});
