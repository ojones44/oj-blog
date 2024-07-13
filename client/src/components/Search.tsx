// types
interface SearchProps {
  placeholder: string;
  classes: string;
}

export const Search = ({ placeholder, classes }: SearchProps) => (
  <input className={classes} type="text" placeholder={placeholder} />
);
