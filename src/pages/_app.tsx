import { Layout } from "@/components/layouts/Layout";
import { generatePostsPathMap } from "@/static-html-generator/postsPathMap";
import { theme } from "@/styles/theme";
import { ChakraProvider, GlobalStyle } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

export async function getStaticProps() {
  const postsPathMap = generatePostsPathMap();
  return {
    props: {
      postsPathMap,
    },
  };
}

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
      <Layout>
        <ThemeProvider theme={theme}>
          <ChakraProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </ChakraProvider>
        </ThemeProvider>
      </Layout>
    </>
  );
}

export default MyApp;
