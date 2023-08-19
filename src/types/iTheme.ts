export interface iSharedThemeOptions {
  // maxWidth: string;

  fonts: {
    primary: string;
    secondary: string;
  };
  // mediaQueries: {
  //   maxMobile: string;
  //   maxTablet: string;
  //   minTablet: string;
  //   minMobile: string;
  // };
  // borderRadius: {
  //   sm: string;
  //   xl: string;
  // };
}

export interface iTheme extends iSharedThemeOptions {
  name: string;

  colors: {
    background: {
      w500: string;
      w400: string;
      w300: string;
    };
    fonts: {
      w500: string;
      w400: string;
      w300: string;
    };
    shadows: {
      linearHeader: string;
    };
    input: {
      inputBackground: string;
      inputIconColor: string;
      inputHover: string;
    };
    borderColor: string;
  };
}
