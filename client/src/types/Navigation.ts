import type { Theme } from './Theme';

export interface Navigation {
  to: string;
  name: string;
}

export interface NavProps {
  setTheme: React.Dispatch<Theme>;
}
