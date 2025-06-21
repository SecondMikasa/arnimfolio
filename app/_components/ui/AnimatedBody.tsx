"use client";
import React, { useEffect, useCallback, memo } from "react";
import { useAnimation, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Type definitions
interface AnimatedBodyProps {
  children: string | React.ReactNode;
  className?: string;
  wordSpace?: string;
  charSpace?: string;
  delay?: number;
  duration?: number;
}

// Animation variants moved outside component to prevent recreation
const bodyAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: "1em",
  },
  visible: {
    opacity: 1,
    y: "0em",
    transition: {
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const AnimatedBody = memo<AnimatedBodyProps>(({
  children,
  className = "",
  delay = 0.1,
  duration = 1,
}) => {
  const ctrls = useAnimation();
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "0px 0px -50px 0px", // Start animation slightly before element is fully visible
  });

  // Memoized animation variants with custom timing
  const customBodyAnimation: Variants = {
    hidden: {
      opacity: 0,
      y: "1em",
    },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        delay,
        duration,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  // Optimized animation control
  const handleAnimation = useCallback(async () => {
    if (inView) {
      await ctrls.start("visible");
    }
  }, [ctrls, inView]);

  useEffect(() => {
    handleAnimation();
  }, [handleAnimation]);

  return (
    <motion.div
      role="region"
      className={className}
      ref={ref}
      initial="hidden"
      animate={ctrls}
      variants={customBodyAnimation}
      // Performance optimization: will-change property
      style={{ willChange: inView ? 'transform, opacity' : 'auto' }}
    >
      {children}
    </motion.div>
  );
});

AnimatedBody.displayName = "AnimatedBody";

export default AnimatedBody;