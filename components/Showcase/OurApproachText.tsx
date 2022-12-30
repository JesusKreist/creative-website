import { Box } from "@chakra-ui/react";

const OurApproachText = () => {
  return (
    <Box
      className="approach"
      gridColumn={{
        md: "8 / -1",
        lg: "span 10 / -1",
        xl: "span 9 / -1",
        "2xl": "1 / span 8",
      }}
      gridRow={{
        md: "8 / -1",
        lg: "span 10 / -1",
        xl: "span 9 / -1",
        "2xl": "span 15 / -1",
      }}
      bgColor="blue"
      //   height="600px"
      //   width="500px"
    ></Box>
  );
};

export default OurApproachText;
