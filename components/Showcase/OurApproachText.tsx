import { Box, Grid, Text } from "@chakra-ui/react";

const OurApproachText = () => {
  return (
    <Grid
      overflow="hidden"
      className="approach"
      gridColumn={{
        md: "8 / -1",
        lg: "1 / span 8",
      }}
      gridRow={{
        md: "8 / -1",
        lg: "span 11 / -1",
      }}
      zIndex="4"
      templateRows={{ lg: "repeat(22, 1fr)" }}
      templateColumns={{ lg: "repeat(16, 1fr)" }}
    >
      <Box
        gridRow="5 / span 10"
        gridColumn="5 / -1"
        maxWidth="540px"
        color="black"
      >
        <Text fontSize="3.5rem" lineHeight="4rem" fontWeight="extrabold">
          Our approach for creating a winning brand
        </Text>
      </Box>
    </Grid>
  );
};

export default OurApproachText;
