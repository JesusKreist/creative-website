import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";

const Homepage = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <Box as="main">
      <NavBar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
    </Box>
  );
};

export default Homepage;
