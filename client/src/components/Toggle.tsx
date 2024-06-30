// react imports
import { useState } from 'react';

// styled component imports
import { ToggleContainer } from '@/wrappers/Toggle';

interface ToggleProps {
  width?: number;
  height?: number;
}

export const Toggle = ({
  width = 50,
  height = 26,
}: ToggleProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Enter') return;
    setActive((prev) => !prev);
  };

  return (
    <ToggleContainer $width={width} $height={height}>
      <div
        role="presentation"
        onClick={() => setActive((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className={active ? 'housing bg-change' : 'housing'}
      >
        <span className={active ? 'slider active' : 'slider'} />
      </div>
    </ToggleContainer>
  );
};
