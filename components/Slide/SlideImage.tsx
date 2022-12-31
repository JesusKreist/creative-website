import { Box } from "@chakra-ui/react";

const SlideImage = () => {
  return (
    <Box
      gridColumn={{
        base: "1 / span 16",
        md: "span 14 / -1",
        lg: "span 11 / -1",
      }}
      gridRow="1 / -1"
      bgImage="/desktop/image-slide-1.jpg"
      bgSize="cover"
      bgRepeat="no-repeat"
    ></Box>
  );
};

export default SlideImage;
