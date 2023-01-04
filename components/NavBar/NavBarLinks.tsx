import { Button, Flex, Link, List, ListItem } from "@chakra-ui/react";
import { AnimationProps, motion } from "framer-motion";
import React from "react";
import { slideFromRight } from "../../animation/animationVariants";

const NavBarLinkItems = () => {
  return (
    <List display="flex" alignItems="center" gap="2rem">
      <Link href="/about">
        <ListItem>About</ListItem>
      </Link>
      <Link href="/service">
        <ListItem>Service</ListItem>
      </Link>
      <Link href="/projects">
        <ListItem>Projects</ListItem>
      </Link>
    </List>
  );
};

const NavBarLinks = () => {
  return (
    <Flex
      as={motion.div}
      variants={slideFromRight()}
      initial="start"
      animate="end"
      className="nav-links"
      display={{ base: "none", md: "flex" }}
      gap="2.5rem"
      width="100%"
      justifyContent={{ base: "center", lg: "end" }}
      gridColumn={{
        md: "8 / -1",
        lg: "span 7 / -3",
        xl: "span 7 / -3",
        "2xl": "span 7 / -4",
      }}
      alignItems="center"
    >
      <NavBarLinkItems />
      <Button variant={{ base: "brandBlackSmall", xl: "brandBlackBig" }}>
        Schedule a Call
      </Button>
    </Flex>
  );
};

export default NavBarLinks;
