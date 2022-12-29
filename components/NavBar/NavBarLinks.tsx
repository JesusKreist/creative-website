import { Link, List, ListItem } from "@chakra-ui/react";
import React from "react";

const NavBarLinks = () => {
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

export default NavBarLinks;
