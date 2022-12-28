import { extendTheme } from "@chakra-ui/react";
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// const breakpoints = {
//   sm: "320px",
//   md: "768px",
//   lg: "960px",
//   xl: "1200px",
//   "2xl": "1440px",
// };

const brandRed = defineStyle({
  background: "F94F4F",
  color: "white",
  borderRadius: "none",
  padding: "2rem 3rem",
  fontSize: "18px",
  fontWeight: "ExtraBold",
  _hover: {
    background: "#FF9393",
  },
});

const brandBlack = defineStyle({
  background: "#191921",
  color: "white",
  borderRadius: "none",
  padding: "2rem 3rem",
  fontSize: "18px",
  fontWeight: "ExtraBold",
  _hover: {
    background: "#434356",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { brandRed, brandBlack },
});

const colors = {
  brand: {
    red: "#F94F4F",
    bgBlack: "#191921",
  },
};

const theme = extendTheme({
  fonts: {
    heading: `'Commissioner', sans-serif`,
    body: `'Commissioner', sans-serif`,
  },
  components: {
    Button: buttonTheme,
  },
  //   breakpoints,
});

export default theme;
