import { Icon, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { slideFromRight } from "../../animation/animationVariants";

interface MobileIconToShowProps {
  isMobileOpen: boolean;
}

const MobileIconToShow: React.FC<MobileIconToShowProps> = ({ isMobileOpen }) =>
  isMobileOpen ? (
    <Icon as={RxCross1} boxSize="2rem" />
  ) : (
    <Icon as={RxHamburgerMenu} boxSize="2rem" />
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
    as={motion.button}
    variants={slideFromRight()}
    initial="start"
    animate="end"
    onClick={() => setIsMobileOpen(!isMobileOpen)}
    color="gray.500"
    gridColumn="span 2 / -2"
    alignSelf="center"
    size="lg"
    variant="unstyled"
    icon={<MobileIconToShow isMobileOpen={isMobileOpen} />}
    aria-label="Open Menu"
    display={{ base: "inline-flex", md: "none" }}
  />
);

export default MobileMenuIcon;
