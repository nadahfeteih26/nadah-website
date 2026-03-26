export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } },
};

export const floatY = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const blobPaths = [
  'M45.2,-58.3C57.3,-49.2,64.8,-33.5,68.1,-17.1C71.4,-0.7,70.5,16.5,63.2,30.1C55.9,43.7,42.2,53.8,27.1,59.8C12,65.8,-4.5,67.6,-20.3,63.5C-36.1,59.3,-51.2,49.1,-60.1,35.1C-69,21.1,-71.7,3.3,-67.8,-12.3C-63.8,-27.8,-53.3,-41.2,-40.3,-50.1C-27.3,-59,-13.7,-63.4,2.1,-66.1C17.8,-68.8,33.1,-67.4,45.2,-58.3Z',
  'M42.7,-55.1C54.1,-46.5,61.2,-31.8,64.5,-16.2C67.8,-0.6,67.3,15.9,60.5,29.4C53.7,42.9,40.6,53.4,25.8,59.4C11,65.4,-5.5,66.9,-21.1,63C-36.7,59.1,-51.4,49.8,-59.4,36.5C-67.4,23.2,-68.7,5.9,-65.1,-10C-61.5,-25.9,-53.1,-40.5,-41.1,-49.1C-29.1,-57.8,-14.5,-60.5,1.3,-62.2C17.1,-63.8,31.3,-63.7,42.7,-55.1Z',
  'M39.9,-51.2C51.7,-42.9,61,-29.8,65.2,-15.1C69.4,-0.3,68.5,16.2,61.1,29.2C53.7,42.2,39.8,51.7,24.7,57.4C9.6,63.1,-6.7,65.1,-22.1,61.1C-37.6,57.1,-52.2,47.2,-60.3,33.5C-68.4,19.8,-70,2.3,-65.7,-13.2C-61.3,-28.6,-51.1,-41.9,-38.6,-50C-26.2,-58.1,-13.1,-60.9,1.5,-62.8C16.1,-64.8,28.2,-59.6,39.9,-51.2Z',
];
