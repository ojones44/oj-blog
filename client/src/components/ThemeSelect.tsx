// react imports
import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';
import * as themes from '@/wrappers/themes';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps): JSX.Element => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  return (
    <div ref={modalRef} className="theme-modal">
      {children}
    </div>
  );
};

const themeMap = Object.values(themes).map((theme) => (
  <div className="theme-option" key={theme.themeName}>
    {theme.themeName}
  </div>
));

export const ThemeSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentTheme = useTheme();

  return (
    <div className="theme-select" onClick={() => setIsOpen((prev) => !prev)}>
      {currentTheme.themeName}
      {isOpen && <Modal isOpen={isOpen}>{themeMap}</Modal>}
    </div>
  );
};

// const handleThemeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
//   const newTheme = e.target.value as keyof typeof themes;
//   setTheme(themes[newTheme]);
// };

/* <div className="theme-selector">
  <select
    value={currentTheme.themeName}
    onChange={handleThemeSelect}
    name="theme-selector"
    id="theme-selector"
  >
    {Object.values(themes).map((theme) => (
      <option key={theme.themeName} value={theme.themeName}>
        {theme.themeName}
      </option>
    ))}
  </select>
</div> */
