import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Component imports
import { Search } from '@/components';

it('renders search component', async () => {
  const user = userEvent.setup();

  render(<Search classes="test" placeholder="placeholder" />);

  const inputEl = screen.getByPlaceholderText(/placeholder/i);
  expect(inputEl).toBeInTheDocument();

  await user.type(inputEl, 'Test text');

  expect(inputEl).toHaveValue('Test text');
});
