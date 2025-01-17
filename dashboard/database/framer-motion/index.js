//? ============== FADING ANIIMATION ============= ?//

export const fading = {
  hidden: { opacity: 0, transition: { ease: "easeInOut", delay: 0.3 } },
  visible: {
    opacity: 1,
    transition: { ease: "easeInOut", delay: 0 },
  },
};

export const fadeTopToBottom = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeInOut", delay: 0, duration: 0.4, when: "beforeChildren" },
  },
  exit: { opacity: 0, y: -10 },
};

export const fadingBottomToTop = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeInOut", delay: 0.3, duration: 0.4, when: "beforeChildren" },
  },
};

export const fadingLeftToRight = {
  hidden: { opacity: 0, x: -5 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: "easeInOut", delay: 0.3, duration: 0.4 },
  },
};

export const searchCollapse = {
  hidden: { y: -5, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeInOut", delay: 0.5, duration: 0.4 },
  },
};

export const leftToRightExhibition = {
  hidden: { opacity: 0.5 },
  visible: {
    opacity: 1,

    transition: { ease: "easeInOut", delay: 0, duration: 0.4, when: "beforeChildren" },
  },
  exit: { opacity: 0, y: -10 },
};

export const rightToLeftExhibition = {
  hidden: { opacity: 0.5 },
  visible: {
    opacity: 1,

    transition: { ease: "easeInOut", delay: 0, duration: 0.4, when: "beforeChildren" },
  },
  exit: { opacity: 0, y: -10 },
};

export const textDelayLeftToRight = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: "easeInOut", delay: 0.2, duration: 0.4, when: "beforeChildren" },
  },
  exit: { opacity: 0, y: -10 },
};

export const textDelayRightToLeft = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: "easeInOut", delay: 0.2, duration: 0.4, when: "beforeChildren" },
  },
};
// * ====================================== * //
