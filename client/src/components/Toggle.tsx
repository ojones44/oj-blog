// styled component imports
import { ToggleContainer } from '@/wrappers/Toggle';

interface ToggleProps {
  width?: number;
  height?: number;
}

export const Toggle = ({ width, height }: ToggleProps): JSX.Element => (
  <ToggleContainer $width={width} $height={height}>
    <label htmlFor="toggler" className="housing">
      <input id="toggler" type="checkbox" />
      <span className="slider" />
    </label>
  </ToggleContainer>
);

Toggle.defaultProps = {
  width: 50,
  height: 26,
};
