import { theme } from "@/styles/theme";
import { ChakraProvider, GlobalStyle } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkMode, setDarkMode] = useState<boolean>(true);
  useEffect(() => {
    console.log(isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>jae8259 blog</title>
      </Head>

      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
