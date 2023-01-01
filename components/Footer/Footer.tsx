import { Button } from "@chakra-ui/react";
import FooterContainer from "./FooterContainer";
import FooterText from "./FooterText";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText />
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
