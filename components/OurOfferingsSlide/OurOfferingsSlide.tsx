import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import SlideContainer from "./SlideContainer";

const OurOfferingsSlide = () => {
  return (
    <SlideContainer>
      <Box
        gridColumn={{
          base: "1 / span 16",
          md: "1 / span 11",
          lg: "1 / span 8",
        }}
        gridRow="1 / span 11"
        bgColor="brand.bgBlack"
        zIndex="1"
      ></Box>
      <Box
        gridColumn={{
          base: "1 / span 16",
          md: "span 14 / -1",
          lg: "span 11 / -1",
        }}
        gridRow="1 / -1"
        bgImage="/desktop/image-slide-1.jpg"
        bgSize="cover"
        bgRepeat="no-repeat"
      ></Box>
    </SlideContainer>
  );
};

export default OurOfferingsSlide;
