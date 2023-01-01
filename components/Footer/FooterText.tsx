import { Text } from "@chakra-ui/react";
import React from "react";

const FooterText = () => {
  return (
    <Text
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
