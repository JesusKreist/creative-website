import { Box, Grid, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideFromLeft } from "../../animation/animationVariants";

const OurApproachText = () => {
  const boxRef = useRef(null);
  const isInView = useInView(boxRef, { once: true });

  return (
    <Grid
      overflow="hidden"
      className="approach"
      alignContent="end"
      gridColumn={{
        base: "1 / span 16",
        md: "1 / span 11",
        lg: "1 / span 8",
      }}
      gridRow={{
        md: "span 15 / -1",
        lg: "span 11 / -1",
      }}
      zIndex="4"
      templateRows={{
        md: "repeat(22, 1fr)",
        lg: "repeat(22, 1fr)",
      }}
      templateColumns={{
        base: "repeat(16, 1fr)",
        md: "repeat(16, 1fr)",
        lg: "repeat(16, 1fr)",
      }}
      bgColor={{ base: "brand.red", md: "unset" }}
      ref={boxRef}
    >
      <Box
        as={motion.div}
        variants={slideFromLeft()}
        initial="start"
        animate={isInView ? "end" : ""}
        gridRow={{ md: "5 / span 10" }}
        gridColumn={{
          base: "2 / -2",
          md: "3 / span 13",
          lg: "5 / -1",
          xl: "5 / -1",
        }}
        maxWidth="540px"
        color={{ base: "white", md: "black" }}
      >
        <Text
          fontSize={{ base: "2rem", lg: "3.5rem" }}
          lineHeight={{ base: "2.5rem", lg: "4rem" }}
          fontWeight="extrabold"
        >
          Our approach for creating a winning brand
        </Text>
      </Box>
    </Grid>
  );
};

export default OurApproachText;
