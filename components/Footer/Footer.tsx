import { Button } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import FooterContainer from "./FooterContainer";
import FooterText from "./FooterText";

const Footer = () => {
  const boxRef = useRef(null);
  const isInView = useInView(boxRef, { once: true });

  return (
    <FooterContainer ref={boxRef}>
      <FooterText isInView={isInView} />
      <Button
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
    </FooterContainer>
  );
};

export default Footer;
