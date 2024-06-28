// component imports
import { MdOutlineLightMode } from 'react-icons/md';
import { FaRegMoon } from 'react-icons/fa';

// styled component imports
import { ToggleContainer, Toggler } from '@/wrappers/Toggle';

export const Toggle = () => (
  <ToggleContainer>
    <MdOutlineLightMode />
    <Toggler>Toggler here</Toggler>
    <FaRegMoon />
  </ToggleContainer>
);
