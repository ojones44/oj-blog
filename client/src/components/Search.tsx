// react imports
import { useRef, useEffect } from 'react';

// types
interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  classes: string;
}

export const Search = ({ classes, ...props }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef && classes.includes('show')) inputRef.current?.focus();
  }, [classes]);

  return <input ref={inputRef} className={classes} type="text" {...props} />;
};
