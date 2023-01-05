import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { slideFromRight } from "../../animation/animationVariants";

interface FooterButtonProps {
  isInView: boolean;
}

const FooterButton: React.FC<FooterButtonProps> = ({ isInView }) => {
  return (
    <Button
      as={motion.p}
      variants={slideFromRight()}
      initial="start"
      animate={isInView ? "end" : ""}
      variant={{ base: "brandRedSmall", xl: "brandRedBig" }}
      width="200px"
      justifySelf={{ md: "end" }}
      gridColumn={{
        base: "2 / -2",
        md: "span 3 / -2",
        lg: "span 3 / -3",
      }}
      gridRow={{ md: "1" }}
    >
      Schedule a Call
    </Button>
  );
};

export default FooterButton;
