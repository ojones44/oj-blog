export const seconds = (x: number): number => x * 1000;

export const capitalize = (s: string): string =>
  `${s[0].toUpperCase()}${s.slice(1)}`;
