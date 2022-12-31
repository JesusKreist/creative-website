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
import SlideImage from "./SlideImage";
import SlideText from "./SlideText";

const Slide = () => {
  return (
    <SlideContainer>
      <SlideText />
      <SlideImage />
    </SlideContainer>
  );
};

export default Slide;
