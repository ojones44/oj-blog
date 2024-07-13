import { useState, useEffect, useCallback } from 'react';

export const useCheckNavSeparator = () => {
  const [navSeparator, setNavSeparator] = useState<boolean>(false);

  const checkScrollPos = useCallback(() => {
    if (window.scrollY > 0) {
      if (!navSeparator) setNavSeparator(true);
    }
    if (window.scrollY <= 0) {
      if (navSeparator) setNavSeparator(false);
    }
  }, [navSeparator]);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPos);
    checkScrollPos();
    return () => window.removeEventListener('scroll', checkScrollPos);
  }, [checkScrollPos]);

  return [navSeparator];
};
