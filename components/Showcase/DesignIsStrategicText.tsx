import { Box } from "@chakra-ui/react";
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
      gridRow={{
        md: "8 / -1",
        lg: "span 10 / -1",
        xl: "span 9 / -1",
        "2xl": "1 / span 13",
      }}
      //   width="705px"
      //   height="784px"
      bgColor="brand.bgBlack"
    ></Box>
  );
};

export default DesignIsStrategicText;
