import { renderHook, act } from '@testing-library/react';
import { vi } from 'vitest';
import { useDebounce } from '@/hooks/useDebounce';
// import { wait } from '../utils';

describe('useDebounce hook', () => {
  const delayValue = 1000;
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  test('should return debounced value after delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'initial', delay: delayValue } }
    );
    expect(result.current).toBe('initial');
    rerender({ value: 'another string', delay: delayValue });
    expect(result.current).toBe('initial');

    act(() => vi.advanceTimersByTime(delayValue + 50));
    expect(result.current).toBe('another string');
  });

  test('should reset timer if changed during delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'initial', delay: delayValue } }
    );
    expect(result.current).toBe('initial');
    rerender({ value: 'first change', delay: delayValue });
    act(() => vi.advanceTimersByTime(delayValue / 2));
    rerender({ value: 'second change', delay: delayValue });
    expect(result.current).toBe('initial');
    act(() => vi.advanceTimersByTime(delayValue + 50));
    expect(result.current).toBe('second change');
  });
});
