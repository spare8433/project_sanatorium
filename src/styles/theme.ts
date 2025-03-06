import { DefaultTheme } from "styled-components";

import DeviceSizes from "./device";

const colors = {
  main: "#e7886e",
  background: "#FFFFFF",
  backgroundGray: "#FBFBFB",
  foreground: "#3B3B3B",
};

const device = {
  mobile: `screen and (max-width: ${DeviceSizes.mobile})`,
  tablet: `screen and (max-width: ${DeviceSizes.tablet})`,
  laptop: `screen and (max-width: ${DeviceSizes.laptop})`,
  desktop: `screen and (max-width: ${DeviceSizes.desktop})`,
  wideDesktop: `screen and (max-width: ${DeviceSizes.wideDesktop})`,
};

const theme: DefaultTheme = {
  colors,
  device,
};

export default theme;
