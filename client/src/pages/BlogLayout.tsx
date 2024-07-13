// react imports
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

// styled component imports
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/wrappers/Globals';
import * as themes from '@/wrappers/themes';

// component imports
import { Navigation } from '@/components';

export const BlogLayout = () => {
  const [theme, setTheme] = useState(themes.synthwave);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navigation
        setTheme={setTheme}
        setIsSearching={() => setIsSearching((prev) => !prev)}
      />
      <section className="container">
        <Outlet context={[isSearching]} />
      </section>
    </ThemeProvider>
  );
};
