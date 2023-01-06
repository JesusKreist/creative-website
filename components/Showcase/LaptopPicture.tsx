import { Box, Image } from "@chakra-ui/react";
// import { motion, Variants } from "framer-motion";
// import { motion, useInView } from "framer-motion";
import { motion, Variants } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { slideFromLeft } from "../../animation/animationVariants";
import ChakraMotionBox from "../MotionComponents/ChakraMotionBox";

const cardVariants: Variants = {
  offscreen: {
    scale: 0,
    x: -90,
  },
  onscreen: {
    scale: 1,
    x: 0,
    transition: { x: { duration: 1 } },
  },
};

const LaptopPicture = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const [mobileBoxRef, isMobilePictureInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    console.log("Element is in view", isMobilePictureInView);
  }, [isMobilePictureInView]);

  return (
    <>
      <Box
        // as={motion.div}
        // variants={cardVariants}
        // initial="offscreen"
        // whileInView="onscreen"
        // viewport={{ once: true, amount: "all" }}

        ref={ref}
        className="picture-laptop"
        overflow="hidden"
        position="relative"
        gridColumn={{
          base: "1 / span 16",
          md: "1 / span 12",
          lg: "1 / span 8",
          "2xl": "1 / span 8",
        }}
        gridRow={{
          md: "1 / span 15",
          lg: "1 / span 13",
          "2xl": "1 / span 13",
        }}
        zIndex="0"
        display={{ base: "none", md: "block" }}
      >
        <Box
          as={motion.div}
          variants={cardVariants}
          initial="offscreen"
          animate={inView ? "onscreen" : ""}
          height="100%"
          width="100%"
          bgImage={{
            base: "/mobile/image-strategic.jpg",
            md: "/tablet/image-strategic.jpg",
            lg: "/desktop/image-strategic.jpg",
          }}
          bgRepeat="no-repeat"
          bgSize="cover"
        ></Box>
      </Box>

      <Box
        ref={mobileBoxRef}
        display={{ base: "block", md: "none" }}
        gridColumn={{ base: "1 / -1" }}
        gridRow={{ base: "1", md: "1 / 2" }}
      >
        <Box
          width="100%"
          as={motion.div}
          variants={cardVariants}
          initial="offscreen"
          animate={isMobilePictureInView ? "onscreen" : ""}
        >
          <Box width="100%">
            <Box
              as="source"
              media="(max-width: 768px)"
              srcSet="/mobile/image-strategic.jpg"
            ></Box>
            <Box
              as="source"
              media="(min-width: 768px) and (max-width: 960px)"
              srcSet="/tablet/image-hero.jpg"
            ></Box>
            <Image
              src="/mobile/image-strategic.jpg"
              alt=""
              objectFit="cover"
              width="100%"
              maxHeight="800px"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LaptopPicture;
