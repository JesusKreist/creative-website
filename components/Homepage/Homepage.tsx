import {
  Box,
  Button,
  Flex,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Hero from "../Hero/Hero";
import MobileMenu from "../MobileMenu";
import NavBar from "../NavBar/NavBar";
import NavBarLinks from "../NavBar/NavBarLinks";
import Showcase from "../Showcase/Showcase";

const Homepage = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <Box as="main">
      <NavBar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      <MobileMenu isMobileOpen={isMobileOpen} />
      <Hero />
      <Showcase />
    </Box>
  );
};

export default Homepage;
