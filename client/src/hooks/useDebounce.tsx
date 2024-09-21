import { useEffect, useState } from 'react';

type DebounceFunc = (value: string, delay?: number) => string;

export const useDebounce: DebounceFunc = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const id = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(id);
    };
  }, [value, delay]);

  return debouncedValue;
};
