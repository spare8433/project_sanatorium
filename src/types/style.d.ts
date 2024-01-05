import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string
      back_white: string
      mainBlack: string
    }
    device: {
      mobile: string
      tablet: string
      laptop: string
      desktop: string
      wideDesktop: string
    }
  }
}
