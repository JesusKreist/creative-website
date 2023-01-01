import { Box, Grid } from "@chakra-ui/react";
import React from "react";

interface SlideContainerProps {
  children: React.ReactNode;
}

const SlideContainer: React.FC<SlideContainerProps> = ({ children }) => {
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
        height={{ md: "472px", lg: "728px" }}
        templateColumns={{
          base: "1fr",
          md: "repeat(25, 1fr)",
          lg: "repeat(17, 1fr)",
        }}
        templateRows={{
          base: "1fr 375px",
          md: "repeat(15, 1fr)",
          lg: "repeat(15, 1fr)",
        }}
        as="section"
        margin="0 auto"
        borderWidth="1px"
        borderColor={{
          sm: "yellow",
          md: "orange",
          lg: "red",
          xl: "blue",
          "2xl": "green",
        }}
      >
        {children}
      </Grid>
    </Box>
  );
};

export default SlideContainer;
