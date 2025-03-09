import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      background: string;
      "background-muted": string;
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
