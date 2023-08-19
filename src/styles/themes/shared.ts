export const BREAKPOINTS = {
  $MAX_MOBILE: 768,
  $MAX_TABLET: 1024,
  $MIN_TABLET: 1025,
  $MIN_MOBILE: 769,
};

export const sharedTheme = {
  fonts: {
    primary: '"Roboto", sans-serif',
    secondary: '"Noto Serif", serif',
  },
  mediaQueries: {
    maxMobile: `${BREAKPOINTS.$MAX_MOBILE}px`,
    maxTablet: `${BREAKPOINTS.$MAX_TABLET}px`,
    minTablet: `${BREAKPOINTS.$MIN_TABLET}px`,
    minMobile: `${BREAKPOINTS.$MIN_MOBILE}px`,
  },
  borderRadius: {
    sm: '0.25rem',
    xl: '2rem',
  },
};
