import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      background: string;
      backgroundGray: string;
      foreground: string;
    };
    device: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
      wideDesktop: string;
    };
  }
}
