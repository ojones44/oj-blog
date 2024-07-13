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
    base: 'rgb(229, 231, 235)',
    fontColor: '#000',
    boxShadow: 'rgba(0, 0, 0, 0.5)',
    primary: '#0070ed',
    secondary: '#463aa2',
    accent: '#f50076',
    neutral: '#021431',
    category: {
      coding: '#463aa2',
      framework: '#f50076',
      learning: '#021431',
      life: '#0070ed',
    },
  },
  typography: {
    primary: 'Baloo, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    secondary: 'Baloo, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
  roundUI: true,
};

export const dark: Theme = {
  themeName: 'dark',
  style: {
    borderRadius: '10px',
  },
  colors: {
    base: '#000',
    fontColor: '#fff',
    boxShadow: 'rgba(255, 255, 255, 0.2)',
    primary: '#f50076',
    secondary: '#a3004c',
    accent: '#d92684',
    neutral: '#291e00',
    category: {
      coding: '#d5aa24',
      framework: '#5c7f67',
      learning: '#a3004c',
      life: '#d92684',
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
    base: '#170d3b',
    fontColor: '#ffd40d',
    boxShadow: 'rgba(0, 0, 0, 0.5)',
    primary: '#221551',
    secondary: '#ffd40d',
    accent: '#58c7f3',
    neutral: '#e779c1',
    category: {
      coding: '#e779c1',
      framework: '#58c7f3',
      learning: '#ffd40d',
      life: '#221551',
    },
  },
  typography: {
    primary:
      'Space Mono,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
    secondary: 'Baloo, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
  roundUI: true,
};
