import type { Theme } from '@/types/Theme';

/*
1. Space Mono
2. Baloo
3. Poetsen One
*/

export const light: Theme = {
  themeName: 'light',
  style: {
    borderRadius: '10px',
  },
  colors: {
    base: '#fff',
    fontColor: '#000',
    primary: 'oklch(0.6245 0.278 3.83636)',
    secondary: 'oklch(0.562735 0.054297 154.39)',
    accent: 'oklch(0.6245 0.278 3.83636)',
    neutral: 'oklch(0.241559 0.049362 89.0706)',
    category: {
      coding: 'oklch(0.241559 0.049362 89.0706)',
      framework: 'oklch(0.562735 0.054297 154.39)',
      learning: 'oklch(0.484952 0.110985 355.096)',
      life: 'oklch(0.6245 0.278 3.83636)',
    },
  },
  typography: {
    primary: 'Baloo, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    secondary: 'Baloo, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
  roundUI: false,
};

export const dark: Theme = {
  themeName: 'dark',
  style: {
    borderRadius: '10px',
  },
  colors: {
    base: '#000',
    fontColor: '#fff',
    primary: 'oklch(0.6245 0.278 3.83636)',
    secondary: 'oklch(0.484952 0.110985 355.096)',
    accent: 'oklch(0.6245 0.278 3.83636)',
    neutral: 'oklch(0.241559 0.049362 89.0706)',
    category: {
      coding: 'oklch(0.241559 0.049362 89.0706)',
      framework: 'oklch(0.562735 0.054297 154.39)',
      learning: 'oklch(0.484952 0.110985 355.096)',
      life: 'oklch(0.6245 0.278 3.83636)',
    },
  },
  typography: {
    primary: 'Baloo, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    secondary: 'Baloo, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
  roundUI: false,
};

export const synthwave: Theme = {
  themeName: 'synthwave',
  style: {
    borderRadius: '10px',
  },
  colors: {
    base: 'oklab(0.20718 0.0234368 -0.0796953)',
    fontColor: 'oklch(0.8804 0.206 93.72)',
    primary: 'oklch(0.255554 0.103537 286.508)',
    secondary: 'oklch(0.8804 0.206 93.72)',
    accent: 'oklch(0.782714 0.118101 227.382)',
    neutral: 'oklch(0.722105 0.159514 342.009)',
    category: {
      coding: 'oklch(0.722105 0.159514 342.009)',
      framework: 'oklch(0.782714 0.118101 227.382)',
      learning: 'oklch(0.8804 0.206 93.72)',
      life: 'oklch(0.255554 0.103537 286.508)',
    },
  },
  typography: {
    primary:
      'Space Mono,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
    secondary: 'Baloo, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
  roundUI: true,
};
