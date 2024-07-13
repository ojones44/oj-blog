// react imports
import { useState, useRef } from 'react';
import { useTheme } from 'styled-components';
import * as themes from '@/wrappers/themes';
import { capitalize } from '@/utils/helpers';
import type { SetThemeHandler } from '@/types/GeneralTypes';

interface ModalProps {
  render: () => React.ReactNode;
}

interface ThemeSelectProps {
  setTheme: SetThemeHandler;
}

const Modal = ({ render }: ModalProps): JSX.Element => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={modalRef} className="theme-modal">
      {render()}
    </div>
  );
};

export const ThemeSelect = ({ setTheme }: ThemeSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentTheme = useTheme();

  return (
    <div className="theme-select" onClick={() => setIsOpen((prev) => !prev)}>
      {capitalize(currentTheme.themeName)}
      {isOpen && (
        <Modal
          render={() =>
            Object.values(themes).map((theme) => (
              <button
                type="button"
                onClick={() => setTheme(theme)}
                className="theme-option nav-btn"
                key={theme.themeName}
              >
                {capitalize(theme.themeName)}
              </button>
            ))
          }
        />
      )}
    </div>
  );
};
