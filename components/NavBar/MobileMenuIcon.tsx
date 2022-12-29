import { Icon, IconButton } from "@chakra-ui/react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

interface MobileIconToShowProps {
  isMobileOpen: boolean;
}

const MobileIconToShow: React.FC<MobileIconToShowProps> = ({ isMobileOpen }) =>
  isMobileOpen ? (
    <Icon as={RxCross1} boxSize="3rem" />
  ) : (
    <Icon as={RxHamburgerMenu} boxSize="3rem" />
  );

interface MobileMenuIconProps {
  isMobileOpen: boolean;
  setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuIcon: React.FC<MobileMenuIconProps> = ({
  isMobileOpen,
  setIsMobileOpen,
}) => (
  <IconButton
    onClick={() => setIsMobileOpen(!isMobileOpen)}
    color="gray.500"
    gridColumn="span 2 / -2"
    alignSelf="center"
    size="lg"
    variant="unstyled"
    icon={<MobileIconToShow isMobileOpen={isMobileOpen} />}
    aria-label="Open Menu"
    display={{ base: "inline-block", md: "none" }}
  />
);

export default MobileMenuIcon;
