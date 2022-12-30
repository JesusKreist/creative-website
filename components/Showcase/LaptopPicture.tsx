import { Box, Image } from "@chakra-ui/react";

const LaptopPicture = () => {
  return (
    <>
      <Box
        className="picture-laptop"
        overflow="hidden"
        position="relative"
        gridColumn={{
          base: "1 / span 16",
          md: "1 / span 12",
          lg: "1 / span 8",
          "2xl": "1 / span 8",
        }}
        gridRow={{
          md: "1 / span 15",
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
        display={{ base: "none", md: "block" }}
      ></Box>

      <Box
        display={{ base: "block", md: "none" }}
        gridColumn={{ base: "1 / -1" }}
        gridRow={{ base: "1", md: "1 / 2" }}
        width="100%"
      >
        <Box as="picture" width="100%">
          <Box
            as="source"
            media="(max-width: 768px)"
            srcSet="/mobile/image-strategic.jpg"
          ></Box>
          <Box
            as="source"
            media="(min-width: 768px) and (max-width: 960px)"
            srcSet="/tablet/image-hero.jpg"
          ></Box>
          <Image
            src="/mobile/image-strategic.jpg"
            alt=""
            objectFit="cover"
            width="100%"
            maxHeight="800px"
          />
        </Box>
      </Box>
    </>
  );
};

export default LaptopPicture;
