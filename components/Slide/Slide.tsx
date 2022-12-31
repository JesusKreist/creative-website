import {
  Box,
  Button,
  Flex,
  Grid,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import SlideContainer from "./SlideContainer";
import SlideText from "./SlideText";

const Slide = () => {
  return (
    <SlideContainer>
      <SlideText />

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

export default Slide;
