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
          base: "repeat(18, 1fr)",
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
      >
        <Flex
          direction="column"
          //   height={{ lg: "379", xl: "528px" }}
          gridColumn={{
            md: "2 / span 7",
            lg: "3 / span 7",
            "2xl": "4 / span 7",
          }}
          gap="3rem"
          gridRow="1 / 2"
          zIndex="1"
          alignSelf="center"
          color="black"
          justifyContent="space-between"
        >
          <Heading
            fontSize={{ md: "3.5rem", xl: "5rem" }}
            lineHeight={{ md: "3.5rem", xl: "5.5rem" }}
            fontWeight={{ md: "extrabold", xl: "extrabold" }}
            width={{ md: "398px", xl: "550px" }}
          >
            Branding & website design agency
          </Heading>
          <Text
            fontSize={{ lg: "1rem", xl: "1.125rem" }}
            lineHeight={{ lg: "1.625rem", xl: "2rem" }}
            fontWeight="normal"
            width={{ lg: "398px", xl: "540px" }}
          >
            We specialize in visual storytelling by creating cohesive brand and
            website design solutions for small businesses, giving lasting
            impressions to audiences in a digital world.
          </Text>
          <Button variant="brandRedSmall" width="177px" height="72px">
            Learn More
          </Button>
        </Flex>
        <HeroImage />
      </Grid>
    </Box>
  );
};

export default Hero;
