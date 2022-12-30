import { Box, Flex, Text } from "@chakra-ui/react";

const OurApproachText = () => {
  return (
    <Box
      overflow="hidden"
      className="approach"
      alignSelf="center"
      justifySelf="end"
      gridColumn={{
        md: "8 / -1",
        lg: "span 10 / -1",
        xl: "span 9 / -1",
        "2xl": "1 / span 8",
      }}
      //   gridRow={{
      //     md: "8 / -1",
      //     lg: "span 10 / -1",
      //     xl: "span 9 / -1",
      //     "2xl": "span 15 / -1",
      //   }}
      // bgColor="blue"
      //   height="900px"
      gridRow={{
        md: "8 / -1",
        lg: "span 10 / -1",
        xl: "span 9 / -1",
        "2xl": "span 11 / -1",
      }}
      zIndex="4"
    >
      <Flex width="540px" height="323px" color="black">
        <Text fontSize="3.5rem" lineHeight="4rem" fontWeight="extrabold">
          Our approach for creating a winning brand
        </Text>
      </Flex>
    </Box>
  );
};

export default OurApproachText;
