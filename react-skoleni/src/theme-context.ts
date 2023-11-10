import React from "react";

export type Theme = 'dark' | 'light';
export type ThemeContextValue = {
  current: Theme,
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextValue>({} as unknown as ThemeContextValue);
