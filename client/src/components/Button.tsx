import type { ButtonProps } from '@/types/Button';

const Button = ({ text, onClick }: ButtonProps) => (
  <button type="button" onClick={onClick}>
    {text}
  </button>
);

export default Button;
