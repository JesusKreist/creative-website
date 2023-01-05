import { Box, Flex, Grid, Text, Image } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

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
};

interface SlideImageProps {
  image: string;
  projectYear: number;
  projectName: string;
}

const SlideImage: React.FC<SlideImageProps> = ({
  image,
  projectYear,
  projectName,
}) => {
  return (
    <>
      <Box
        as={motion.div}
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        display={{ base: "none", md: "grid" }}
        className="slide-image"
        gridColumn={{
          base: "1 / span 16",
          md: "span 14 / -1",
          lg: "span 11 / -1",
        }}
        gridRow="1 / -1"
        gridTemplateColumns={{ md: "repeat(21, 1fr)" }}
        gridTemplateRows={{ md: "repeat(34, 1fr)" }}
        bgImage={{ md: `/tablet/${image}`, lg: `/desktop/${image}` }}
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Box
          gridColumn={{ md: "span 10 / -3", lg: "span 10 / -5" }}
          gridRow={{ md: "span 3 / -3", lg: "span 5 / -3" }}
          color="white"
          textAlign="right"
          fontSize={{ base: "", md: "1rem", xl: "1.25rem" }}
          lineHeight={{ base: "", md: "1.25rem", lg: "", xl: "2rem" }}
        >
          <Text fontWeight="extrabold">{projectName}</Text>
          <Text>{projectYear} Project</Text>
        </Box>
      </Box>
      <Box
        as={motion.div}
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
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
    </>
  );
};

export default SlideImage;
