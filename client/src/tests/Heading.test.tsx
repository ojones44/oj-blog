import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// Component imports
import { Heading } from '@/components';

describe('Simple working test', () => {
  it('has class yeah__nice', () => {
    render(<Heading heading="Blog Heading" />);

    const headingEl = screen.getByRole('heading', { name: /blog/i });
    expect(headingEl).toBeInTheDocument();
    expect(headingEl).toHaveTextContent('Blog Heading');
  });
});
