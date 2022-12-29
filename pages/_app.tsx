import "../styles/globals.css";
import "@fontsource/commissioner/100.css";
import "@fontsource/commissioner/200.css";
import "@fontsource/commissioner/300.css";
import "@fontsource/commissioner/400.css";
import "@fontsource/commissioner/500.css";
import "@fontsource/commissioner/600.css";
import "@fontsource/commissioner/700.css";
import "@fontsource/commissioner/800.css";
import "@fontsource/commissioner/900.css";
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
