import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";

interface FeatureProps {
  heading: string;
  text: string;
  paddedNumber: string;
}
const Feature: React.FC<FeatureProps> = ({ paddedNumber, heading, text }) => {
  return (
    <Flex
      // overflow="hidden"
      color="white"
      width={{ md: "80%", lg: "90%" }}
      maxWidth="504px"
      justifyContent="center"
      position="relative"
      paddingLeft="3.5rem"
    >
      <Flex
        maxWidth="445px"
        direction="column"
        justifyContent="end"
        gap="1.5rem"
        zIndex="1"
      >
        <Heading
          as="h3"
          fontSize={{ md: "1rem", lg: "1.25rem" }}
          fontWeight="extrabold"
          lineHeight={{ md: "1.5625rem", lg: "2rem" }}
        >
          {heading}
        </Heading>
        <Text
          fontSize={{ md: "1rem", lg: "1.125rem" }}
          lineHeight={{ md: "1.5625rem", lg: "2rem" }}
        >
          {text}
        </Text>
      </Flex>

      <Text
        position="absolute"
        fontSize="5rem"
        fontWeight="extrabold"
        lineHeight="5.5rem"
        left={{ md: "3rem", lg: "0" }}
        bottom={{ md: "5rem", lg: "7rem" }}
        opacity="0.25"
      >
        {paddedNumber}
      </Text>
    </Flex>
  );
};

const ThingsWeDo = () => {
  return (
    <Grid
      className="things-we-do"
      gridColumn={{
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
        />
        <Feature
          heading="Brand Design"
          text="Keeping the brand design unique and meaningful helps in communicating the brand's timeless value effectively."
          paddedNumber="02"
        />
        <Feature
          heading="Web Design"
          text="A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues. "
          paddedNumber="03"
        />
      </Flex>
    </Grid>
  );
};

export default ThingsWeDo;
