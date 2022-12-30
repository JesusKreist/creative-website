import { Box } from "@chakra-ui/react";

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
      gridRow={{
        md: "8 / -1",
        lg: "span 10 / -1",
        xl: "span 9 / -1",
        "2xl": "span 19 / -1",
      }}
      bgColor="brand.red"
      //   width="895px"
      //   height="1100px"
    ></Box>
  );
};

export default ThingsWeDo;
