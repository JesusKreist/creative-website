import { Box, Image } from "@chakra-ui/react";

const HeroImage = () => {
  return (
    <Box
      gridColumn={{ base: "1 / -1", md: "span 10 / -1" }}
      gridRow={{ base: "1", md: "1 / 2" }}
      width="100%"
      bgColor="blue"
    >
      <Box as="picture" width="100%">
        <Box
          as="source"
          media="(max-width: 768px)"
          srcSet="/mobile/image-hero.jpg"
        ></Box>
        <Box
          as="source"
          media="(min-width: 768px) and (max-width: 960px)"
          srcSet="/tablet/image-hero.jpg"
        ></Box>
        <Image
          src="/desktop/image-hero.jpg"
          alt="image describing the location for the family"
          objectFit="cover"
          width="100%"
          maxHeight="800px"
        />
      </Box>
    </Box>
  );
};

export default HeroImage;
