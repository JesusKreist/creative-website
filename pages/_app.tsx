import "../styles/globals.css";
import "@fontsource/commissioner";
import type { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
