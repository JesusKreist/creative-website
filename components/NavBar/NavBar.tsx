import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import React from "react";
import Logo from "../Logo/Logo";
import MobileMenuIcon from "./MobileMenuIcon";
import NavBarLinks from "./NavBarLinks";
import RedBackground from "./RedBackground";

interface NavBarProps {
  isMobileOpen: boolean;
  setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavBarProps> = ({ isMobileOpen, setIsMobileOpen }) => {
  return (
    <Box
      color="white"
      margin="0 auto"
      maxWidth={{ "2xl": "1920px" }}
      height={{ base: "120px", md: "178px" }}
      position="relative"
    >
      <Grid
        position="relative"
        height="100%"
        templateColumns={{
          base: "repeat(18, 1fr)",
          md: "repeat(16, 1fr)",
          lg: "repeat(17, 1fr)",
        }}
        as="nav"
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
          gridColumn={{
            base: "2 / span 8",
            md: "2 / 6",
            lg: "3 / span 3",
            xl: "3 / span 3",
            "2xl": "4 / span 3",
          }}
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
        <RedBackground />

        <NavBarLinks />
      </Grid>
    </Box>
  );
};

export default NavBar;
