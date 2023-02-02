import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      orange: string;
    };
  }
}

export type t = infer DefaultTheme;
