import styled from 'styled-components';

interface ToggleProps {
  $width: number;
  $height: number;
}

export const ToggleContainer = styled.div<ToggleProps>`
  .housing {
    position: relative;
    cursor: pointer;
    width: ${({ $width }) => $width}px;
    height: ${({ $height }) => $height}px;
    border-radius: 100vmax;
    border: 1px solid var(--theme-clr-secondary);
    background-color: transparent;
    transition: 0.4s;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    width: ${({ $height }) => $height - $height * 0.2}px;
    height: ${({ $height }) => $height - $height * 0.2}px;
    left: ${({ $height }) => $height / 2 - ($height - $height * 0.2) / 2}px;
    top: ${({ $height }) => $height / 2 - ($height - $height * 0.2) / 2}px;
    background-color: var(--theme-clr-accent);
    border-radius: 100vmax;
    transition: 0.4s;
  }

  .active {
    transform: translateX(${(props) => props.$width - props.$height}px);
  }

  .bg-change {
  }
`;
