import { Box, Grid, Image } from "@chakra-ui/react";

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
        <Box
          height="400px"
          gridColumn="4 / span 7"
          bgColor="yellow"
          gridRow="1 / 2"
          zIndex="1"
        ></Box>
        <Box
          gridColumn="span 10 / -1"
          bgColor="blue"
          gridRow="1 / 2"
          width="100%"
        >
          <Box as="picture">
            <Box
              as="source"
              media="(max-width: 400px)"
              srcSet="/mobile/image-hero.jpg"
            ></Box>
            <Box
              as="source"
              media="(min-width: 400px) and (max-width: 960px)"
              srcSet="/tablet/image-hero.jpg"
            ></Box>
            <Image
              src="/desktop/image-hero.jpg"
              alt="image describing the location for the family"
              objectFit="fill"
              width="100%"
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Hero;
