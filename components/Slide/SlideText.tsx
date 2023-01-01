import { Grid, Flex, IconButton, Box, Text, Image } from "@chakra-ui/react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";

interface SlideTextProps {
  slideTagLine: string;
  handlePreviousSlide: () => void;
  handleNextSlide: () => void;
}

const SlideText: React.FC<SlideTextProps> = ({
  slideTagLine,
  handleNextSlide,
  handlePreviousSlide,
}) => {
  return (
    <Grid
      className="slider-text"
      gridColumn={{
        md: "1 / span 12",
        lg: "1 / span 8",
      }}
      gridRow={{ md: "1 / span 11" }}
      bgColor="brand.bgBlack"
      zIndex="6"
      templateColumns={{
        base: "repeat(16, 1fr)",
        md: "repeat(17, 1fr)",
        lg: "repeat(16, 1fr)",
      }}
      position="relative"
    >
      <Box
        width={{ base: "63px", lg: "100px", xl: "135px" }}
        position="absolute"
        right={{ md: "-2rem", lg: "-3rem", xl: "-4rem" }}
        top={{ base: "-1rem", md: "7rem", lg: "11rem", xl: "11rem" }}
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
          lg: "span 10 / -3",
          xl: "5 / 15",
          "2xl": "span 10 / -3",
        }}
        color={{ base: "white" }}
        gap={{ base: "2rem", lg: "4rem" }}
        position="relative"
      >
        <Text
          fontSize={{ base: "2rem", lg: "3.5rem" }}
          lineHeight={{ base: "2.5rem", lg: "4rem" }}
          fontWeight="extrabold"
        >
          {slideTagLine}
        </Text>
        <Flex gap="2rem">
          <IconButton
            variant="brandRedOutline"
            rounded="full"
            aria-label="left arrow icon"
            fontSize="20px"
            icon={<RxChevronLeft />}
            onClick={handlePreviousSlide}
          />
          <IconButton
            variant="brandRedOutline"
            rounded="full"
            aria-label="right arrow icon"
            fontSize="20px"
            icon={<RxChevronRight />}
            onClick={handleNextSlide}
          />
        </Flex>
      </Flex>
    </Grid>
  );
};

export default SlideText;
