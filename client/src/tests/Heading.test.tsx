import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// Component imports
import { Heading } from '@/components';

describe('Heading component test suite', () => {
  it('renders correct text', () => {
    render(<Heading heading="Blog Heading" />);

    const headingEl = screen.getByRole('heading', { name: /blog/i });
    expect(headingEl).toBeInTheDocument();
    expect(headingEl).toHaveTextContent('Blog Heading');
  });
});
