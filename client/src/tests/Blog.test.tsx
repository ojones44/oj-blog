import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// Component imports
import { Blog } from '@/pages';

describe('Simple working test', () => {
  it('has class yeah__nice', () => {
    render(<Blog />);

    const div = screen.getByTestId('home');
    expect(div).toHaveClass('yeah__nice');
  });
});
