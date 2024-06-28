import styled from 'styled-components';

interface ToggleProps {
  $width: number;
  $height: number;
}

export const ToggleContainer = styled.div<ToggleProps>`
  .housing {
    position: relative;
    display: inline-block;
    width: ${(props) => props.$width}px;
    height: ${(props) => props.$height}px;
  }

  input {
    opacity: 0;
    margin: 0;
    padding: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: grey;
    border-radius: 100vmax;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    width: ${(props) => props.$height - 5}px;
    height: ${(props) => props.$height - 5}px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 100vmax;
  }

  input:checked + .slider {
    background-color: purple;
  }

  input:checked + .slider:before {
    transform: translateX(${(props) => props.$width - props.$height}px);
  }
`;
