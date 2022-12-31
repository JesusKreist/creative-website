import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Hero from "../Hero/Hero";
import MobileMenu from "../MobileMenu";
import NavBar from "../NavBar/NavBar";
import OurOfferingsSlide from "../Slide/Slide";
import Showcase from "../Showcase/Showcase";

const Homepage = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <Box as="main">
      <NavBar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      <MobileMenu isMobileOpen={isMobileOpen} />
      <Hero />
      <Showcase />
      <OurOfferingsSlide />
    </Box>
  );
};

export default Homepage;
