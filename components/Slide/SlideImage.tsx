import { Box, Flex, Grid, Text, Image } from "@chakra-ui/react";

const SlideImage = () => {
  return (
    <>
      <Grid
        display={{ base: "none", md: "grid" }}
        className="slide-image"
        gridColumn={{
          base: "1 / span 16",
          md: "span 14 / -1",
          lg: "span 11 / -1",
        }}
        gridRow="1 / -1"
        templateColumns={{ md: "repeat(21, 1fr)" }}
        templateRows={{ md: "repeat(34, 1fr)" }}
        bgImage="/mobile/image-slide-1.jpg"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Box
          gridColumn={{ md: "span 10 / -3", lg: "span 10 / -5" }}
          gridRow={{ md: "span 3 / -3", lg: "span 5 / -3" }}
          color="white"
          textAlign="right"
          fontSize={{ base: "", md: "1rem", xl: "1.25rem" }}
          lineHeight={{ base: "", md: "1.25rem", lg: "", xl: "2rem" }}
        >
          <Text fontWeight="extrabold">Lean Product Roadmap</Text>
          <Text>2019 Project</Text>
        </Box>
      </Grid>
      <Box
        display={{ base: "block", md: "none" }}
        gridColumn={{ base: "1 / -1" }}
        gridRow={{ base: "1", md: "1 / 2" }}
        width="100%"
        position="relative"
      >
        <Box
          className="picture-text"
          color="white"
          textAlign="right"
          position="absolute"
          bottom="2rem"
          right="2rem"
          fontSize={{ base: "", md: "1rem", xl: "1.25rem" }}
          lineHeight={{ base: "", md: "1.25rem", lg: "", xl: "2rem" }}
        >
          <Text fontWeight="extrabold">Lean Product Roadmap</Text>
          <Text>2019 Project</Text>
        </Box>
        <Box as="picture" width="100%">
          <Box
            as="source"
            media="(max-width: 768px)"
            srcSet="/mobile/image-slide-1.jpg"
          ></Box>
          <Box
            as="source"
            media="(min-width: 768px) and (max-width: 960px)"
            srcSet="/tablet/image-slide-1.jpg"
          ></Box>
          <Image
            src="/mobile/image-slide-1.jpg"
            alt=""
            objectFit="cover"
            width="100%"
            minHeight="404px"
          />
        </Box>
      </Box>
    </>
  );
};

export default SlideImage;
