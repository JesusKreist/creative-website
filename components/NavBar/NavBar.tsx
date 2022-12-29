import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import React from "react";
import Logo from "../Logo/Logo";
import MobileMenuIcon from "./MobileMenuIcon";
import NavBarLinks from "./NavBarLinks";

interface NavBarProps {
  isMobileOpen: boolean;
  setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavBarProps> = ({ isMobileOpen, setIsMobileOpen }) => {
  return (
    <Box
      color="white"
      margin="0 auto"
      width={{ "2xl": "100vw" }}
      maxWidth={{ "2xl": "1920px" }}
      bg={{ lg: "linear-gradient(to left, #F94F4F, #F94F4F 47%, white 30%)" }}
      height={{ base: "120px", md: "178px" }}
      position="relative"
    >
      {/* <Box
        width="252px"
        height="400px"
        border="2px solid green"
        position="absolute"
        bgColor="black"
        // top="100%"
        zIndex="0"
      ></Box> */}
      <Grid
        position="relative"
        height="100%"
        templateColumns={{
          base: "repeat(18, 1fr)",
          md: "repeat(16, 1fr)",
          lg: "repeat(17, 1fr)",
        }}
        as="nav"
        width={{ "2xl": "1440px" }}
        margin="0 auto"
        borderWidth="2px"
        borderColor={{
          sm: "yellow",
          md: "orange",
          lg: "red",
          xl: "blue",
          "2xl": "green",
        }}
      >
        <Flex
          gridColumn={{ base: "2 / span 8", md: "2 / 6", lg: "3 / span 3" }}
          height="100%"
          alignItems="center"
          width="100%"
        >
          <Logo />
        </Flex>

        <MobileMenuIcon
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
        />

        <Flex
          display={{ base: "none", md: "flex" }}
          gap="2.5rem"
          width="100%"
          justifyContent={{ base: "center", xl: "start" }}
          paddingLeft={{ xl: "4rem" }}
          gridColumn={{ md: "8 / -1", lg: "span 8 / -1" }}
          alignItems="center"
          bgColor={{ md: "brand.red" }}
        >
          <NavBarLinks />
          <Button variant={{ base: "brandBlackSmall", xl: "brandBlackBig" }}>
            Schedule a Call
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
};

export default NavBar;
