import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface FeatureProps {
  heading: string;
  text: string;
  paddedNumber: string;
}
const Feature: React.FC<FeatureProps> = ({ paddedNumber, heading, text }) => {
  return (
    <Flex
      overflow="hidden"
      color="white"
      width="504px"
      height="196px"
      justifyContent="center"
      position="relative"
      paddingLeft="3.5rem"
    >
      <Flex
        width="445px"
        direction="column"
        justifyContent="end"
        gap="1.5rem"
        zIndex="1"
      >
        <Heading fontSize="1.25rem" fontWeight="extrabold" lineHeight="2rem">
          {heading}
        </Heading>
        <Text fontSize="1.125rem" lineHeight="2rem">
          {text}
        </Text>
      </Flex>

      <Text
        position="absolute"
        fontSize="5rem"
        fontWeight="extrabold"
        lineHeight="5.5rem"
        left="0"
        opacity="0.25"
      >
        {paddedNumber}
      </Text>
    </Flex>
  );
};

const ThingsWeDo = () => {
  return (
    <Box
      className="things-we-do"
      gridColumn={{
        md: "8 / -1",
        lg: "span 10 / -1",
        xl: "span 9 / -1",
        "2xl": "span 11 / -1",
      }}
      //   gridRow={{
      //     md: "8 / -1",
      //     lg: "span 10 / -1",
      //     xl: "span 9 / -1",
      //     "2xl": "span 19 / -1",
      //   }}

      gridRow={{
        md: "8 / -1",
        lg: "span 10 / -1",
        xl: "span 9 / -1",
        "2xl": "span 14 / -1",
      }}
      bgColor="brand.red"
      //   width="895px"
      zIndex="3"
    >
      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        height="100%"
        gap="4rem"
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
    </Box>
  );
};

export default ThingsWeDo;
