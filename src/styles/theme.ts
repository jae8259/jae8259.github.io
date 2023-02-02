import { createGlobalStyle, DefaultTheme } from "styled-components";
import { normalize } from "styled-normalize";
export const theme: DefaultTheme = {
  colors: {
    black: "#1e1f1d",
    white: "#ffffff",
    orange: "#eb7952",
  },
};

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
    font-size: 20px;
    min-width: 320px;
  }
  a { cursor: pointer; text-decoration: none; }
`;
