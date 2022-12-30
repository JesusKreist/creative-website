import { Box } from "@chakra-ui/react";

const LaptopPicture = () => {
  return (
    <Box
      className="picture-laptop"
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
        "2xl": "1 / span 17",
      }}
      bgColor="pink"
    ></Box>
  );
};

export default LaptopPicture;
