import { createGlobalStyle } from 'styled-components';
import type { Theme } from '@/types/Theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const GlobalStyles = createGlobalStyle`
:root {
  /* Assign fonts */
  --ff-primary: ${({ theme }) => theme.typography.primary};
  --ff-accent: ${({ theme }) => theme.typography.secondary};

  font-family: var(--ff-primary);
  line-height: 1.5;

  /* Set main font colours */
  --fc-primary: ${({ theme }) => theme.colors.fontColor};

  /* Set theme colours */
  --theme-clr-base: ${({ theme }) => theme.colors.base};
  --theme-clr-primary: ${({ theme }) => theme.colors.primary};
  --theme-clr-secondary: ${({ theme }) => theme.colors.secondary};
  --theme-clr-accent: ${({ theme }) => theme.colors.accent};
  --theme-clr-neutral: ${({ theme }) => theme.colors.neutral};
  --theme-clr-cat-coding: ${({ theme }) => theme.colors.category.coding};
  --theme-clr-cat-framework: ${({ theme }) => theme.colors.category.framework};
  --theme-clr-cat-learning: ${({ theme }) => theme.colors.category.learning};
  --theme-clr-cat-life: ${({ theme }) => theme.colors.category.life};

  /* Set theme styles */
  --border-radius: ${({ theme }) => (theme.roundUI ? theme.style.borderRadius : '2px')};

  /* Assign font weights */
  --fw-regular: 300;
  --fw-bold: 700;
  --fw-accent-italic: 400;

  /* Fixed font sizes */
  --fs-300-fix: 1rem;
  --fs-400-fix: 1.25rem;
  --fs-450-fix: 1.5rem;
  --fs-500-fix: 1.75rem;
  --fs-600-fix: 2rem;
  --fs-700-fix: 2.5rem;

  /* Padding variables */
  --size-100: 0.25rem;
  --size-200: 0.5rem;
  --size-300: 0.75rem;
  --size-400: 1rem;
  --size-500: 1.25rem;
  --size-600: 1.5rem;
  --size-700: 2rem;
  --size-800: 2.5rem;
  --size-900: 3rem;

  /* Block flow */
  --flow-spacer: 1em;
  --nav-height: 12vh;

  /* Animations */
  --transition-200: all 0.2s ease;
  --transition-400: all 0.4s ease-in-out;
  --transition-btn: all 0.2s ease-in-out;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

/* ---------------------------------------------------------------- */
/* -----------------------------Resets----------------------------- */
/* ---------------------------------------------------------------- */

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin, padding and inherit font for all */
* {
  margin: 0;
  padding: 0;
  font: inherit;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

html,
body {
  height: 100%;
}

// inherit fonts
input, button, textarea, select {
  font: inherit;
}

input {
  all: unset;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 2px solid var(--theme-clr-accent);
}


/* Set core body defaults */
body {
  background-color: var(--theme-clr-base);
  color: var(--fc-primary);
  min-height: 100vw;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  padding: 0.25rem 2rem;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
svg,
picture {
  max-width: 100%;
  display: block;
}

svg {
 cursor: pointer;
 color: var(--fc-primary);
 font-size: var(--fs-400-fix);
}

button {
  cursor: pointer;
  background-color: var(--theme-clr-accent);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
}

button:hover {
  transform: translateY(-3px);
  transition: var(--transition-btn);
}

button:active {
  transform: scale(0.99);
  transition: var(--transition-200);
}


// utility classes

.icon {
  padding: var(--size-200);
}

.icon:hover {
  background-color: var(--theme-clr-primary);
  border-radius: 100vmax;
  transition: var(--transition-400);
}

.social-link svg:hover {
  transform: rotateZ(5deg);
  transition: var(--transition-200);
}

.category-coding {
  background-color: var(--theme-clr-cat-coding);
}

.category-framework {
  background-color: var(--theme-clr-cat-framework);
}

.category-learning {
  background-color: var(--theme-clr-cat-learning);
}

.category-life {
  background-color: var(--theme-clr-cat-life);
}


`;
