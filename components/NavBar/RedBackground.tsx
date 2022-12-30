import { Box } from "@chakra-ui/react";

const RedBackground = () => {
  return (
    <Box
      className="bg-red"
      gridColumn={{
        md: "8 / -1",
        lg: "span 10 / -1",
        xl: "span 9 / -1",
        "2xl": "span 9 / -1",
      }}
      bgColor={{ md: "brand.red" }}
      position="absolute"
      height="100%"
      width="100%"
      zIndex="-1"
    ></Box>
  );
};

export default RedBackground;
