import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import DesignIsStrategicText from "./DesignIsStrategicText";
import LaptopPicture from "./LaptopPicture";
import OurApproachText from "./OurApproachText";
import ThingsWeDo from "./ThingsWeDo";

const Showcase = () => {
  return (
    <Box
      as="section"
      color="white"
      margin="0 auto"
      maxWidth="1920px"
      position="relative"
      overflow="hidden"
    >
      <Grid
        overflow="hidden"
        position="relative"
        // height="100%"
        height="1884px"
        templateColumns={{
          base: "repeat(16, 1fr)",
          md: "repeat(16, 1fr)",
          lg: "repeat(17, 1fr)",
        }}
        // templateRows={{
        //   base: "repeat(16, 1fr)",
        //   md: "repeat(16, 1fr)",
        //   lg: "repeat(32, 1fr)",
        // }}

        templateRows={{
          base: "repeat(16, 1fr)",
          md: "repeat(16, 1fr)",
          lg: "repeat(24, 1fr)",
        }}
        as="section"
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
        <LaptopPicture />
        <DesignIsStrategicText />
        <OurApproachText />
        <ThingsWeDo />
      </Grid>
    </Box>
  );
};

export default Showcase;
