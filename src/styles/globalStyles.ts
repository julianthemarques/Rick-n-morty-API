import { createGlobalStyle } from 'styled-components';

const ColorsCSS = createGlobalStyle`
  :root {
    --background-w500: ${({ theme }) => theme.colors.background.w500};
    --background-w400: ${({ theme }) => theme.colors.background.w400};
    --background-w300: ${({ theme }) => theme.colors.background.w300};
    --fonts-w500: ${({ theme }) => theme.colors.fonts.w500};
    --fonts-w400: ${({ theme }) => theme.colors.fonts.w400};
    --fonts-w300: ${({ theme }) => theme.colors.fonts.w300};
    --svg-input-color: ${({ theme }) => theme.colors.input.inputIconColor};
    --svg-input-background: ${({ theme }) =>
      theme.colors.input.inputBackground};
    --svg-input-hover: ${({ theme }) => theme.colors.input.inputHover};
    --shadows-linear-header: ${({ theme }) =>
      theme.colors.shadows.linearHeader};
    --border: ${({ theme }) => theme.colors.borderColor};
  }
`;

const FontCSS = createGlobalStyle`
  :root {
    --font-primary: ${({ theme }) => theme.fonts.primary}
  }
`;

const RootCSS = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    min-height: 100vh;

    font-family: var(--font-primary);
    background-color: var(--background-w500);
    color: var(--fonts-w500);

    transition: all 0.5s;
  }

  #__next{
    width: 100%;
    height: 100%;
  }

  a {
    font-family: var(--font-primary);
    color: var(--fonts-w500);
  }
`;

export const GlobalStyle = { FontCSS, RootCSS, ColorsCSS };
