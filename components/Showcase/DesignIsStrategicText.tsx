import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  Grid,
} from "@chakra-ui/react";

const DesignIsStrategicText = () => {
  return (
    <Grid
      className="strategic-design"
      gridColumn={{
        md: "span 13 / -1",
        lg: "9 / -1",
      }}
      gridRow={{
        md: "1 / span 12",
        lg: "1 / span 10",
      }}
      bgColor="brand.bgBlack"
      zIndex="1"
      templateColumns={{ md: "repeat(26, 1fr)", lg: "repeat(18, 1fr)" }}
      position="relative"
    >
      <Box
        width={{ md: "63px", lg: "100px", xl: "135px" }}
        position="absolute"
        top={{ md: "141px", lg: "200px", xl: "170px" }}
        left={{ md: "-30px", lg: "-50px", xl: "-70px" }}
      >
        <Image src="/desktop/bg-pattern-wave-red.svg" alt=""></Image>
      </Box>
      <Flex
        width="90%"
        maxWidth="28rem"
        color="white"
        direction="column"
        gap={{ md: "2.5rem", lg: "3.5rem" }}
        alignSelf="center"
        gridColumn={{ md: "5 / -1", lg: "4 / -1" }}
      >
        <Heading
          fontSize={{ base: "2.5rem", md: "2rem", lg: "3.5rem" }}
          lineHeight={{
            base: "2.5rem",
            md: "2.5rem",
            lg: "3.5rem",
            xl: "4rem",
          }}
          fontWeight="extrabold"
        >
          <Box as="span" color="brand.red">
            Design
          </Box>{" "}
          is{" "}
          <Box as="span" display="block">
            strategic
          </Box>
        </Heading>
        <Text
          fontSize={{ md: "1rem", xl: "1.125rem" }}
          lineHeight={{ md: "1.5625rem", lg: "1.625rem", xl: "2rem" }}
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
            // marginBlock="1rem"
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
