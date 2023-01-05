import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const childVariants = {
  start: { opacity: 0 },
  end: { opacity: 1, transition: { duration: 1 } },
};

interface FeatureProps {
  heading: string;
  text: string;
  paddedNumber: string;
  transitionDelay: number;
}
const Feature: React.FC<FeatureProps> = ({
  paddedNumber,
  heading,
  text,
  transitionDelay,
}) => {
  const boxRef = useRef(null);
  const isInView = useInView(boxRef, { once: true });

  const animationVariant = {
    ...childVariants,
    end: {
      ...childVariants.end,
      transition: { ...childVariants.end.transition, delay: transitionDelay },
    },
  };

  return (
    <Flex
      color="white"
      width={{ base: "95%", md: "80%", lg: "90%" }}
      maxWidth={{ base: "400px", md: "504px" }}
      justifyContent="center"
      position="relative"
      paddingLeft={{ base: "2.5rem", md: "3.5rem" }}
      ref={boxRef}
    >
      <Flex
        as={motion.div}
        variants={animationVariant}
        initial="start"
        animate={isInView ? "end" : ""}
        maxWidth={{ base: "400px", md: "445px" }}
        direction="column"
        justifyContent="end"
        gap="1.5rem"
        zIndex="1"
      >
        <Box position="relative">
          <Heading
            as="h3"
            fontSize={{ md: "1rem", lg: "1.25rem" }}
            fontWeight="extrabold"
            lineHeight={{ md: "1.5625rem", lg: "2rem" }}
          >
            {heading}
          </Heading>
          <Text
            position="absolute"
            fontSize="5rem"
            fontWeight="extrabold"
            lineHeight="5.5rem"
            left={{ base: "-1rem", md: "-1rem", lg: "-3.5rem" }}
            bottom={{ base: "-1.25rem", md: "-1.25rem", lg: "-0.7rem" }}
            opacity="0.25"
          >
            {paddedNumber}
          </Text>
        </Box>

        <Text
          fontSize={{ md: "1rem", lg: "1.125rem" }}
          lineHeight={{ md: "1.5625rem", lg: "2rem" }}
        >
          {text}
        </Text>
      </Flex>
    </Flex>
  );
};

const ThingsWeDo = () => {
  return (
    <Grid
      className="things-we-do"
      gridColumn={{
        base: "1 / span 16",
        md: "span 14 / -1",
        lg: "span 11 / -1",
      }}
      gridRow={{
        md: "span 18 / -1",
        lg: "span 14 / -1",
      }}
      bgColor="brand.red"
      zIndex="3"
      templateColumns={{ lg: "repeat(22, 1fr)" }}
    >
      <Flex
        direction="column"
        justify="center"
        height="100%"
        gap="4rem"
        gridColumn={{ lg: "7 / -2" }}
      >
        <Feature
          heading="Brand Strategy"
          text="Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key."
          paddedNumber="01"
          transitionDelay={0}
        />
        <Feature
          heading="Brand Design"
          text="Keeping the brand design unique and meaningful helps in communicating the brand's timeless value effectively."
          paddedNumber="02"
          transitionDelay={0.5}
        />
        <Feature
          heading="Web Design"
          text="A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues. "
          paddedNumber="03"
          transitionDelay={1}
        />
      </Flex>
    </Grid>
  );
};

export default ThingsWeDo;
