import { iTheme } from 'types/iTheme';
import { sharedTheme } from './shared';

export const defaultTheme: iTheme = {
  name: 'default',

  colors: {
    background: {
      w500: 'rgba(230,230,230, 1)',
      w400: 'rgba(230,230,230, 0.9)',
      w300: 'rgba(230,230,230, 0.2)',
    },
    fonts: {
      w500: 'rgba(0,0,0, 1)',
      w400: 'rgba(0,0,0, 0.6)',
      w300: 'rgba(0,0,0, 0.2)',
    },
    shadows: {
      linearHeader: '#70d254a3',
    },
    input: {
      inputBackground: 'rgba(216, 216, 215, 0.5)',
      inputIconColor: ' #1F8943',
      inputHover: '#c1c1c1 ',
    },
    borderColor: '#3d3d3d',
  },
  ...sharedTheme,
};
