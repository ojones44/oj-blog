export interface Theme {
  themeName: string;
  style: {
    borderRadius: string;
  };
  colors: {
    base: string;
    fontColor: string;
    boxShadow: string;
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
    category: {
      coding: string;
      framework: string;
      learning: string;
      life: string;
    };
  };
  typography: {
    primary: string;
    secondary: string;
  };
  roundUI: boolean;
}
