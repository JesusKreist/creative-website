import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { slideFromLeft } from "../../animation/animationVariants";

interface FooterTextProps {
  isInView: boolean;
}

const FooterText: React.FC<FooterTextProps> = ({ isInView }) => {
  return (
    <Text
      as={motion.p}
      variants={slideFromLeft()}
      initial="start"
      animate={isInView ? "end" : ""}
      color="black"
      gridRow="1"
      gridColumn={{
        base: "2 / -2",
        md: "2 / span 7",
        lg: "3 / span 7",
      }}
      maxWidth="600px"
      fontSize={{ base: "2rem", lg: "3.5rem" }}
      lineHeight={{ base: "2.5rem", lg: "4rem" }}
      fontWeight="extrabold"
    >
      Let&apos;s build something great together.
    </Text>
  );
};

export default FooterText;
