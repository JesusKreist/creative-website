import { Box, Image } from "@chakra-ui/react";

const LaptopPicture = () => {
  return (
    <Box
      className="picture-laptop"
      overflow="hidden"
      position="relative"
      gridColumn={{
        md: "8 / -1",
        lg: "1 / span 8",
        "2xl": "1 / span 8",
      }}
      gridRow={{
        md: "8 / -1",
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
    >
      {/* <Box as="picture" width="100%">
        <Box
          as="source"
          media="(max-width: 768px)"
          srcSet="/mobile/image-strategic.jpg"
        ></Box>
        <Box
          as="source"
          media="(min-width: 768px) and (max-width: 960px)"
          srcSet="/tablet/image-strategic.jpg"
        ></Box>
        <Image
          src="/desktop/image-strategic.jpg"
          alt="image of someone designing on a sketchpad"
          objectFit="cover"
          width="100%"
          // maxHeight="800px"
        />
      </Box> */}
    </Box>
  );
};

export default LaptopPicture;
