import { Box, Grid, Image } from "@chakra-ui/react";
import React from "react";

interface FooterContainerProps {
  children: React.ReactNode;
}

// const FancyButton = React.forwardRef((props, ref) => {});

const FooterContainer = React.forwardRef<HTMLDivElement, FooterContainerProps>(
  ({ children }, ref) => {
    return (
      <Box
        as="section"
        color="white"
        margin="0 auto"
        maxWidth="1920px"
        position="relative"
        className="footer-container"
        ref={ref}
      >
        <Grid
          className="footer-container-grid"
          position="relative"
          height={{ md: "210px", lg: "230px" }}
          templateColumns={{
            base: "repeat(16, 1fr)",
            md: "repeat(17, 1fr)",
            lg: "repeat(17, 1fr)",
          }}
          templateRows={{
            base: "1fr 1fr",
            md: "1fr",
            lg: "1fr",
          }}
          gridRowGap={{ base: "2rem", md: "unset" }}
          as="section"
          margin="0 auto"
          alignItems={{ base: "center", md: "center" }}
          paddingBlock={{ base: "2.5rem", md: "unset" }}
        >
          <Box
            zIndex="6"
            width={{ base: "63px", lg: "100px", xl: "135px" }}
            position="absolute"
            top={{ base: "-15px", md: "unset" }}
            left={{ md: "-30px", lg: "-50px", xl: "-70px" }}
            gridColumn={{ base: "2 / -2", md: "unset" }}
          >
            <Image src="/desktop/bg-pattern-wave-red.svg" alt=""></Image>
          </Box>
          {children}
        </Grid>
      </Box>
    );
  }
);

FooterContainer.displayName = "FooterContainer";

export default FooterContainer;
