// type imports
import type { HeadingProps } from '@/types/Heading';

export const Heading = ({ heading }: HeadingProps): JSX.Element => (
  <h1 className="heading">{heading}</h1>
);
