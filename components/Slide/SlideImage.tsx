import { Box, Flex, Grid, Text, Image } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import SlideLargeImage from "./SlideLargeImage";
import SlideMobileImage from "./SlideMobileImage";
import { SlideImageProps } from "./slides";

const cardVariants: Variants = {
  offscreen: {
    scale: 0,
    x: 90,
  },
  onscreen: {
    scale: 1,
    x: 0,
    transition: { x: { duration: 1 } },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const SlideImage: React.FC<SlideImageProps> = ({
  image,
  projectYear,
  projectName,
}) => {
  return (
    <>
      <SlideLargeImage
        image={image}
        projectYear={projectYear}
        projectName={projectName}
      />
      <SlideMobileImage
        image={image}
        projectYear={projectYear}
        projectName={projectName}
      />
    </>
  );
};

export default SlideImage;
