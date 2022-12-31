import { Grid, Flex, IconButton, Box, Text, Image } from "@chakra-ui/react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";

const SlideText = () => {
  return (
    <Grid
      className="slider-text"
      gridColumn={{
        base: "1 / span 16",
        md: "1 / span 11",
        lg: "1 / span 8",
      }}
      gridRow="1 / span 11"
      bgColor="brand.bgBlack"
      zIndex="1"
      templateColumns={{
        base: "repeat(16, 1fr)",
        md: "repeat(26, 1fr)",
        lg: "repeat(16, 1fr)",
      }}
      position="relative"
    >
      <Box
        width={{ base: "63px", lg: "100px", xl: "135px" }}
        position="absolute"
        right={{ xl: "-4rem" }}
        top={{ xl: "11rem" }}
        gridColumn={{ base: "2 / -2", md: "unset" }}
      >
        <Image src="/desktop/bg-pattern-wavy-white.svg" alt=""></Image>
      </Box>
      <Flex
        direction="column"
        height="100%"
        justifyContent="center"
        gridColumn={{
          base: "2 / -2",
          md: "3 / span 13",
          lg: "span 8 / -3",
          xl: "span 12 / -3",
          "2xl": "span 10 / -3",
        }}
        color={{ base: "white" }}
        gap="4rem"
        position="relative"
      >
        <Text
          fontSize={{ base: "2rem", lg: "3.5rem" }}
          lineHeight={{ base: "2.5rem", lg: "4rem" }}
          fontWeight="extrabold"
        >
          Brand naming & guidelines
        </Text>
        <Flex gap="2rem">
          <IconButton
            variant="brandRedOutline"
            rounded="full"
            aria-label="left arrow icon"
            fontSize="20px"
            icon={<RxChevronLeft />}
          />
          <IconButton
            variant="brandRedOutline"
            rounded="full"
            aria-label="right arrow icon"
            fontSize="20px"
            icon={<RxChevronRight />}
          />
        </Flex>
      </Flex>
    </Grid>
  );
};

export default SlideText;
