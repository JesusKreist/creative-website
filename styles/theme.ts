import { extendTheme } from "@chakra-ui/react";
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1440px",
};

const brandRedOutline = defineStyle({
  color: "#F94F4F",
  // background: "white",
  border: "2px solid #F94F4F",
  padding: "2rem 3rem",
  fontSize: "18px",
  fontWeight: "ExtraBold",
  _hover: {
    color: "#FF9393",
    border: "2px solid #FF9393",
  },
});

const brandRedBig = defineStyle({
  background: "#F94F4F",
  color: "white",
  borderRadius: "none",
  padding: "2rem 3rem",
  fontSize: "18px",
  fontWeight: "ExtraBold",
  _hover: {
    background: "#FF9393",
  },
});

const brandBlackBig = defineStyle({
  background: "#191921",
  color: "white",
  borderRadius: "none",
  padding: "2rem 2rem",
  fontSize: "18px",
  fontWeight: "ExtraBold",
  _hover: {
    background: "#434356",
  },
});

const brandRedSmall = defineStyle({
  background: "#F94F4F",
  color: "white",
  borderRadius: "none",
  padding: "2rem 1rem",
  fontSize: "18px",
  fontWeight: "ExtraBold",
  _hover: {
    background: "#FF9393",
  },
});

const brandBlackSmall = defineStyle({
  background: "#191921",
  color: "white",
  borderRadius: "none",
  padding: "2rem 1rem",
  fontSize: "18px",
  fontWeight: "ExtraBold",
  _hover: {
    background: "#434356",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: {
    brandRedOutline,
    brandRedBig,
    brandBlackBig,
    brandRedSmall,
    brandBlackSmall,
  },
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
  colors,
  breakpoints,
});

export default theme;
