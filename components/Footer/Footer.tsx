import { Button } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import FooterButton from "./FooterButton";
import FooterContainer from "./FooterContainer";
import FooterText from "./FooterText";

const Footer = () => {
  const boxRef = useRef(null);
  const isInView = useInView(boxRef, { once: true });

  return (
    <FooterContainer ref={boxRef}>
      <FooterText isInView={isInView} />
      <FooterButton isInView={isInView} />
    </FooterContainer>
  );
};

export default Footer;
