// react imports
import { useState } from 'react';
import { useTheme } from 'styled-components';
import type { Theme } from '@/types/Theme';

// styled component imports
import { ToggleContainer } from '@/wrappers/Toggle';
import * as themes from '@/wrappers/themes';

interface ToggleProps {
  toggleHandler: React.Dispatch<Theme>;
  width?: number;
  height?: number;
}

export const Toggle = ({
  toggleHandler,
  width = 50,
  height = 26,
}: ToggleProps): JSX.Element => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const currentTheme = useTheme();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Enter') return;
    setIsDark((prev) => !prev);
  };

  const handleToggle = () => {
    const themeIsCustom =
      currentTheme.themeName !== 'light' && currentTheme.themeName !== 'dark';

    if (!themeIsCustom) {
      const nextTheme = isDark ? themes.light : themes.dark;
      toggleHandler(nextTheme);
      setIsDark((prev) => !prev);
      return;
    }
    if (themeIsCustom && isDark) {
      setIsDark(false);
      toggleHandler(themes.light);
      return;
    }
    if (themeIsCustom && !isDark) {
      setIsDark(true);
      toggleHandler(themes.dark);
    }
  };

  return (
    <ToggleContainer $width={width} $height={height}>
      <div
        role="presentation"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="housing"
      >
        <span className={isDark ? 'slider active' : 'slider'} />
      </div>
    </ToggleContainer>
  );
};
