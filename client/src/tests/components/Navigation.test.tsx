// testing library imports
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
// util imports
import { navLinks } from '@/utils/navLinks';

// component imports
import { mockNavBarComponent } from '../mocks/routers';

const router = createMemoryRouter(mockNavBarComponent, {
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
    const getCurrentUrl = (): string => router.state.location.pathname;
    render(<RouterProvider router={router} />);

    const linkElements = await screen.findAllByRole('link');
    const [blogFeed, socials, settings] = linkElements;

    await user.click(socials);
    expect(getCurrentUrl()).toBe((socials as HTMLAnchorElement).pathname);
    await user.click(settings);
    expect(getCurrentUrl()).toBe((settings as HTMLAnchorElement).pathname);
    await user.click(blogFeed);
    expect(getCurrentUrl()).toBe((blogFeed as HTMLAnchorElement).pathname);
  });
  it('toggle is displayed and functions correctly', async () => {
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);

    const toggleHousing = screen.getByRole('presentation');
    const slider = toggleHousing.firstChild;

    expect(toggleHousing).toBeInTheDocument();
    expect(slider).toBeInTheDocument();
    expect(toggleHousing).toHaveClass('housing');
    expect(slider).toHaveClass('slider');

    await user.click(toggleHousing);
    expect(slider).toHaveClass('active');
  });
  it('displays dark/light icons', () => {
    render(<RouterProvider router={router} />);

    const themeIcons = screen.getAllByTitle(/theme-icon/i);
    themeIcons.forEach((themeIcon) => expect(themeIcon).toBeInTheDocument());
  });
  it('displays social icons', () => {
    render(<RouterProvider router={router} />);

    const socials = screen.getAllByTitle(/social/i);
    socials.forEach((social) => expect(social).toBeInTheDocument());
  });
});
