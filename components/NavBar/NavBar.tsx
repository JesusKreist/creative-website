import { Box, Button, Flex, Grid, Icon, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "../Logo/Logo";
import NavBarLinks from "./NavBarLinks";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

interface MobileMenuIconProps {
  isMobileOpen: boolean;
}

const MobileMenuIcon: React.FC<MobileMenuIconProps> = ({ isMobileOpen }) =>
  isMobileOpen ? (
    <Icon as={RxCross1} boxSize="3rem" />
  ) : (
    <Icon as={RxHamburgerMenu} boxSize="3rem" />
  );

const NavBar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <Box
      color="white"
      height={{ base: "120px", md: "178px" }}
      margin="0 auto"
      width={{ "2xl": "100vw" }}
      maxWidth={{ "2xl": "1920px" }}
      bg={{ lg: "linear-gradient(to left, #F94F4F, #F94F4F 47%, white 30%)" }}
    >
      <Grid
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

        {/* <Flex gridColumn="span 3 / -2">
          <IconButton aria-label="Search database" icon={<HamburgerIcon />} />
        </Flex> */}

        <IconButton
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          color="gray.500"
          gridColumn="span 2 / -2"
          alignSelf="center"
          size="lg"
          variant="unstyled"
          // icon={<RxHamburgerMenu />}
          icon={<MobileMenuIcon isMobileOpen={isMobileOpen} />}
          aria-label="Open Menu"
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
