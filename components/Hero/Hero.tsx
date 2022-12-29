import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <Box
      as="section"
      color="white"
      margin="0 auto"
      maxWidth="1920px"
      position="relative"
    >
      <Grid
        position="relative"
        height="100%"
        templateColumns={{
          base: "repeat(16, 1fr)",
          md: "repeat(16, 1fr)",
          lg: "repeat(17, 1fr)",
        }}
        as="nav"
        margin="0 auto"
        borderWidth="2px"
        borderColor={{
          sm: "yellow",
          md: "orange",
          lg: "red",
          xl: "blue",
          "2xl": "green",
        }}
        rowGap="3rem"
      >
        <HeroText />
        <HeroImage />
      </Grid>
    </Box>
  );
};

export default Hero;
