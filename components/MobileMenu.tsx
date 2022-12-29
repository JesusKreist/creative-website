import { Box, Button, Link, List, ListItem } from "@chakra-ui/react";

interface MobileMenuProps {
  isMobileOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMobileOpen }) => (
  <Box
    display={{ base: isMobileOpen ? "flex" : "none", md: "none" }}
    width="252px"
    height="292px"
    position="absolute"
    bgColor="brand.bgBlack"
    color="white"
    right="0"
    zIndex={1000}
  >
    <List
      display="flex"
      alignItems="center"
      justifyContent="center"
      margin="0 auto"
      gap="2rem"
      flexDirection="column"
    >
      <Link href="/about">
        <ListItem>About</ListItem>
      </Link>
      <Link href="/service">
        <ListItem>Service</ListItem>
      </Link>
      <Link href="/projects">
        <ListItem>Projects</ListItem>
      </Link>
      <Link href="/schedule-call">
        <ListItem>
          <Button
            width="199px"
            height="64px"
            variant={{ base: "brandRedSmall", xl: "brandRedBig" }}
          >
            Schedule a Call
          </Button>
        </ListItem>
      </Link>
    </List>
  </Box>
);

export default MobileMenu;
