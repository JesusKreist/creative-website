import { Box, Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

const DesignIsStrategicText = () => {
  return (
    <Box
      className="strategic-design"
      gridColumn={{
        md: "8 / -1",
        lg: "span 10 / -1",
        xl: "span 9 / -1",
        "2xl": "9 / -1",
      }}
      //   gridRow={{
      //     md: "8 / -1",
      //     lg: "span 10 / -1",
      //     xl: "span 9 / -1",
      //     "2xl": "1 / span 13",
      //   }}
      //   width="705px"
      //   height="784px"

      gridRow={{
        md: "8 / -1",
        lg: "span 10 / -1",
        xl: "span 9 / -1",
        "2xl": "1 / span 5",
      }}
      bgColor="brand.bgBlack"
    >
      <Flex
        width="666px"
        gap="8rem"
        height="100%"
        alignItems="center"
        marginLeft="-4rem"
      >
        <Flex gap="6rem">
          <Box width="135px">
            <Image src="/desktop/bg-pattern-wave-red.svg" alt=""></Image>
          </Box>

          <Flex width="445px" color="white" direction="column" gap="3.5rem">
            <Heading
              fontSize={{ base: "2.5rem", md: "3.5rem" }}
              lineHeight={{ base: "2.5rem", md: "3.5rem", xl: "4rem" }}
              fontWeight="extrabold"
            >
              <Box as="span" color="brand.red">
                Design
              </Box>{" "}
              is strategic
            </Heading>
            <Text
              fontSize={{ lg: "1rem", xl: "1.125rem" }}
              lineHeight={{ lg: "1.625rem", xl: "2rem" }}
              fontWeight="normal"
            >
              “A well-crafted design strategy consistently produces desired
              outcomes and brand awareness. We are firm believers that success
              lies in creative collaboration with our clients.”
            </Text>
            <Box alignSelf="start">
              <Button
                variant="unstyled"
                fontSize="1.125rem"
                color="brand.red"
                borderRadius="none"
                borderBottom="1px solid red"
                marginBlock="1rem"
                _hover={{
                  color: "orange",
                  "border-bottom": "1px solid orange",
                }}
              >
                Schedule a Call
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DesignIsStrategicText;
