import { AnimationProps } from "framer-motion";

// export const slideFromTop = (
//   delayInSeconds?: number
// ): AnimationProps["variants"] => {
//   return {
//     start: { y: "-100vh", opacity: 0 },
//     end: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         y: { duration: 1, delay: delayInSeconds },
//       },
//     },
//   };
// };

export const slideFromLeft = (
  delayInSeconds?: number
): AnimationProps["variants"] => {
  return {
    start: { x: "-100vw", opacity: 0 },
    end: {
      x: 0,
      opacity: 1,
      transition: {
        x: { duration: 1, delay: delayInSeconds },
      },
    },
  };
};

export const slideFromRight = (
  delayInSeconds?: number
): AnimationProps["variants"] => {
  return {
    start: { x: "100vw", opacity: 0 },
    end: {
      x: 0,
      opacity: 1,
      transition: {
        x: { duration: 1, delay: delayInSeconds },
      },
    },
  };
};
