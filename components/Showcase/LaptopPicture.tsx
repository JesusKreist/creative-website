import { Box, Image } from "@chakra-ui/react";

const LaptopPicture = () => {
  return (
    <Box
      className="picture-laptop"
      overflow="hidden"
      position="relative"
      gridColumn={{
        md: "1 / span 11",
        lg: "1 / span 8",
        "2xl": "1 / span 8",
      }}
      gridRow={{
        md: "1 / span 13",
        lg: "1 / span 13",
        "2xl": "1 / span 13",
      }}
      zIndex="0"
      bgImage={{
        base: "/mobile/image-strategic.jpg",
        md: "/tablet/image-strategic.jpg",
        lg: "/desktop/image-strategic.jpg",
      }}
      bgRepeat="no-repeat"
      bgSize="cover"
    ></Box>
  );
};

export default LaptopPicture;
