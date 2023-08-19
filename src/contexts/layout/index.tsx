import React, { createContext, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/globalStyles';
import { darkTheme } from 'styles/themes/darkTheme';
import { defaultTheme } from 'styles/themes/defaultTheme';
import { iLayoutContext } from './iLayoutContext';

export const LayoutContext = createContext<iLayoutContext>(
  {} as iLayoutContext,
);

interface LayoutProviderProps {
  children: React.ReactNode;
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [theme, setTheme] = useState(true);
  const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ThemeProvider theme={theme === true ? defaultTheme : darkTheme}>
      <GlobalStyle.ColorsCSS />
      <GlobalStyle.FontCSS />
      <GlobalStyle.RootCSS />
      <LayoutContext.Provider value={contextValue}>
        {children}
      </LayoutContext.Provider>
    </ThemeProvider>
  );
};
