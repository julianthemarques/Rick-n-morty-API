import { iTheme } from 'types/iTheme';
import { sharedTheme } from './shared';

export const darkTheme: iTheme = {
  name: 'darkTheme',

  colors: {
    background: {
      w500: 'rgba(12, 14, 16, 1)',
      w400: 'rgba(12, 14, 16, 0.9)',
      w300: 'rgba(12, 14, 16, 0.2)',
    },
    fonts: {
      w500: 'rgba(255,255,255, 1)',
      w400: 'rgba(255,255,255, 0.6)',
      w300: 'rgba(255,255,255, 0.2)',
    },
    shadows: {
      linearHeader: '#70d254a3',
    },
    input: {
      inputBackground: '#2A2E37',
      inputIconColor: ' #1F8943',
      inputHover: 'rgba(42, 46, 55, 0.1)',
    },
    borderColor: '#3d3d3d',
  },
  ...sharedTheme,
};
