import Bold from "@assets/font/NotoSansKR-Bold.woff2";
import Light from "@assets/font/NotoSansKR-Light.woff2";
import Regular from "@assets/font/NotoSansKR-Regular.woff2";
import SemiBold from "@assets/font/NotoSansKR-SemiBold.woff2";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
    ${normalize}
    @font-face {
      font-family: "NotoSansKR";
      src: url(${Bold}) format('woff2');
      font-weight: 700;
    }
    @font-face {
      font-family: "NotoSansKR";
      src: url(${SemiBold}) format('woff2');
      font-weight: 600;
    }
    @font-face {
      font-family: "NotoSansKR";
      src: url(${Regular}) format('woff2');
      font-weight: 400;
    }
    @font-face {
      font-family: "NotoSansKR";
      src: url(${Light}) format('woff2');
      font-weight: 300;
    }

    * {
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 400;
      box-sizing: border-box;
      color:  ${({ theme }) => theme.colors.foreground};
    }
    html, body{
      width: 100%;      
      height: 100%;
    }
    html {
      font-size: 10px;

      @media ${({ theme }) => theme.device.tablet} {
        font-size: 8.75px;
      }

      @media ${({ theme }) => theme.device.mobile} {
        font-size: 7px;
      }
    }
    body {
      background-color: #fff;
      box-sizing: border-box;
    }
    h1,h2,h3,h4,h5,h6 {
      margin: 0;
      font-weight: 600;
    }
    p { 
      font-size: 1.4rem;
      margin:0 
    }
    h1 {
      font-size: 2.8rem;
      font-weight: 700;
    }
    h2 {
      font-size: 2.4rem;
      font-weight: 700;
    }
    h3 {font-size: 2.0rem}
    h4 {font-size: 1.8rem}
    h5 {font-size: 1.6rem}
    h6 {font-size: 1.4rem}
    a {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.foreground};
      text-decoration: none;
      outline: none
    }
    a:hover, a:active {
      color: ${({ theme }) => theme.colors.foreground};
      text-decoration: none;
    }
    div{
      box-sizing: border-box;
    }
    ul {
      padding: 0;
      margin: 0;
    }
    li {list-style:none}
`;

export default GlobalStyles;
