import { Heading, Flex, Text, Button } from "@chakra-ui/react";

const HeroText = () => {
  return (
    <Flex
      direction="column"
      gridColumn={{
        base: "2 / -2",
        md: "2 / span 7",
        lg: "3 / span 7",
        "2xl": "4 / span 7",
      }}
      gap="3rem"
      gridRow={{ md: "1 / 2" }}
      zIndex="1"
      alignSelf="center"
      color="black"
    >
      <Heading
        as="h1"
        fontSize={{ base: "2.5rem", md: "3.5rem", xl: "5rem" }}
        lineHeight={{ base: "2.5rem", md: "3.5rem", xl: "5.5rem" }}
        fontWeight="extrabold"
        width={{ base: "", md: "398px", xl: "550px" }}
      >
        Branding & website design agency
      </Heading>
      <Text
        fontSize={{ lg: "1rem", xl: "1.125rem" }}
        lineHeight={{ lg: "1.625rem", xl: "2rem" }}
        fontWeight="normal"
        width={{ lg: "398px", xl: "540px" }}
      >
        We specialize in visual storytelling by creating cohesive brand and
        website design solutions for small businesses, giving lasting
        impressions to audiences in a digital world.
      </Text>
      <Button variant="brandRedSmall" width="177px" height="72px">
        Learn More
      </Button>
    </Flex>
  );
};

export default HeroText;
