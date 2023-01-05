import { Box, Text, Image } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

import React from "react";
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

const SlideMobileImage: React.FC<SlideImageProps> = ({
  projectYear,
  projectName,
  image,
}) => {
  return (
    <Box
      key={projectName}
      as={motion.div}
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      exit="exit"
      display={{ base: "block", md: "none" }}
      gridColumn={{ base: "1 / -1" }}
      gridRow={{ base: "1", md: "1 / 2" }}
      width="100%"
      position="relative"
    >
      <Box
        className="picture-text"
        color="white"
        textAlign="right"
        position="absolute"
        bottom="2rem"
        right="2rem"
        fontSize={{ base: "", md: "1rem", xl: "1.25rem" }}
        lineHeight={{ base: "", md: "1.25rem", lg: "", xl: "2rem" }}
      >
        <Text fontWeight="extrabold">{projectName}</Text>
        <Text>{projectYear} Project</Text>
      </Box>
      <Box as="picture" width="100%">
        <Image
          src={`/mobile/${image}`}
          alt=""
          objectFit="cover"
          width="100%"
          minHeight="404px"
        />
      </Box>
    </Box>
  );
};

export default SlideMobileImage;
