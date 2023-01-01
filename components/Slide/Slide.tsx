import {
  Box,
  Button,
  Flex,
  Grid,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import SlideContainer from "./SlideContainer";
import SlideImage from "./SlideImage";
import SlideText from "./SlideText";
import { slides } from "./slides";
import { useState } from "react";

const Slide = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(slides[currentSlideIndex]);

  const nextSlide = (
    currentSlideIndex: number,
    setCurrentSlideIndex: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (currentSlideIndex !== 2) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
    if (currentSlideIndex === 2) {
      setCurrentSlideIndex(0);
    }
  };

  const prevSlide = (
    currentSlideIndex: number,
    setCurrentSlideIndex: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (currentSlideIndex === 0) {
      setCurrentSlideIndex(2);
    }
    if (currentSlideIndex !== 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  useEffect(() => {
    setCurrentSlide(slides[currentSlideIndex]);
  }, [currentSlideIndex, currentSlide]);

  return (
    <SlideContainer>
      <SlideText
        slideTagLine={currentSlide.slideTagLine}
        handlePreviousSlide={() =>
          prevSlide(currentSlideIndex, setCurrentSlideIndex)
        }
        handleNextSlide={() =>
          nextSlide(currentSlideIndex, setCurrentSlideIndex)
        }
      />
      <SlideImage
        image={currentSlide.image}
        projectYear={2019}
        projectName={currentSlide.projectName}
      />
    </SlideContainer>
  );
};

export default Slide;
