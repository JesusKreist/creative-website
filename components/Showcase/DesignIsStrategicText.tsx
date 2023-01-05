import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  Grid,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { slideFromRight } from "../../animation/animationVariants";

const DesignIsStrategicText = () => {
  const boxRef = useRef(null);
  const isInView = useInView(boxRef, { once: true });

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <Grid
      className="strategic-design"
      gridColumn={{
        base: "1 / span 16",
        md: "span 13 / -1",
        lg: "9 / -1",
      }}
      gridRow={{
        md: "1 / span 12",
        lg: "1 / span 10",
      }}
      bgColor="brand.bgBlack"
      zIndex="1"
      templateColumns={{
        base: "repeat(16, 1fr)",
        md: "repeat(26, 1fr)",
        lg: "repeat(18, 1fr)",
      }}
      position="relative"
      ref={boxRef}
    >
      <Box
        width={{ base: "63px", lg: "100px", xl: "135px" }}
        position="absolute"
        top={{ base: "-15px", md: "141px", lg: "200px", xl: "170px" }}
        left={{ md: "-30px", lg: "-50px", xl: "-70px" }}
        gridColumn={{ base: "2 / -2", md: "unset" }}
      >
        <Image src="/desktop/bg-pattern-wave-red.svg" alt=""></Image>
      </Box>

      <Flex
        as={motion.div}
        variants={slideFromRight()}
        initial="start"
        animate={isInView ? "end" : ""}
        width="90%"
        maxWidth="28rem"
        color="white"
        direction="column"
        gap={{ base: "2rem", md: "2.5rem", lg: "3.5rem" }}
        alignSelf="center"
        gridColumn={{ base: "2 / -2", md: "5 / -1", lg: "4 / -1" }}
      >
        <Heading
          fontSize={{ base: "2rem", lg: "3.5rem" }}
          lineHeight={{
            base: "2.5rem",
            lg: "3.5rem",
            xl: "4rem",
          }}
          fontWeight="extrabold"
        >
          <Box as="span" color="brand.red">
            Design
          </Box>{" "}
          is{" "}
          <Box as="span" display={{ md: "block" }}>
            strategic
          </Box>
        </Heading>
        <Text
          fontSize={{ base: "1rem", xl: "1.125rem" }}
          lineHeight={{ base: "1.5625rem", lg: "1.625rem", xl: "2rem" }}
          fontWeight="normal"
        >
          “A well-crafted design strategy consistently produces desired outcomes
          and brand awareness. We are firm believers that success lies in
          creative collaboration with our clients.”
        </Text>
        <Box alignSelf="start">
          <Button
            variant="unstyled"
            fontSize={{ md: "1rem", lg: "1.125rem" }}
            color="brand.red"
            borderRadius="none"
            borderBottom="1px solid red"
            marginTop={{ base: "1rem", md: "unset" }}
            _hover={{
              color: "orange",
              borderBottom: "1px solid orange",
            }}
          >
            Schedule a Call
          </Button>
        </Box>
      </Flex>
    </Grid>
  );
};

export default DesignIsStrategicText;
