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
        height={{ md: "1335px", lg: "1884px" }}
        templateColumns={{
          base: "repeat(16, 1fr)",
          md: "repeat(25, 1fr)",
          lg: "repeat(17, 1fr)",
        }}
        templateRows={{
          base: "1fr 377px 218px 700px",
          md: "repeat(30, 1fr)",
          lg: "repeat(24, 1fr)",
        }}
        as="section"
        margin="0 auto"
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
