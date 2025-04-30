import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const fadeIn: Variants = {
  hidden: { 
    opacity: 0
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export const staggerChildren: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: 20 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const scaleUp: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

export const matrixReveal: Variants = {
  hidden: { 
    opacity: 0, 
    backgroundPosition: "0% 0%"
  },
  visible: { 
    opacity: 1, 
    backgroundPosition: "100% 100%",
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
};

export const pulseAnimation: Variants = {
  hidden: { 
    scale: 1
  },
  visible: { 
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

export const glitchText: Variants = {
  hidden: { 
    textShadow: "0 0 0 rgba(0,0,0,0)"
  },
  visible: { 
    textShadow: [
      "0.05em 0 0 rgba(0,255,65,0.75), -0.025em -0.05em 0 rgba(123,92,255,0.75), 0.025em 0.05em 0 rgba(0,114,255,0.75)",
      "0.05em 0 0 rgba(0,255,65,0.75), -0.025em -0.05em 0 rgba(123,92,255,0.75), 0.025em 0.05em 0 rgba(0,114,255,0.75)",
      "-0.05em 0 0 rgba(0,255,65,0.75), 0.025em -0.05em 0 rgba(123,92,255,0.75), -0.025em 0.05em 0 rgba(0,114,255,0.75)",
      "-0.05em 0 0 rgba(0,255,65,0.75), 0.025em -0.05em 0 rgba(123,92,255,0.75), -0.025em 0.05em 0 rgba(0,114,255,0.75)",
      "0.05em 0 0 rgba(0,255,65,0.75), -0.025em -0.05em 0 rgba(123,92,255,0.75), 0.025em 0.05em 0 rgba(0,114,255,0.75)"
    ],
    transform: [
      "translate(0)",
      "translate(-2px, 2px)",
      "translate(-2px, -2px)",
      "translate(2px, 2px)",
      "translate(2px, -2px)",
      "translate(0)"
    ],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};
