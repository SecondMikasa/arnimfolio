"use client";
import React, { useEffect, useCallback, memo, useMemo } from "react";
import { useAnimation, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Type definitions
interface AnimatedTitleProps {
  children: string;
  className?: string;
  wordSpace?: string;
  charSpace?: string;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  id?: string;
}

// Animation variants moved outside component to prevent recreation
const wordAnimation: Variants = {
  hidden: {},
  visible: {},
};

const characterAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: "0.25em",
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

const AnimatedTitle = memo<AnimatedTitleProps>(({
  children,
  className = "",
  wordSpace = "",
  charSpace = "",
  delay = 0,
  duration = 1,
  staggerDelay = 0.25,
  id,
}) => {
  const ctrls = useAnimation();
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "0px 0px -30px 0px",
  });

  // Memoized animation variants with custom timing
  const customCharacterAnimation: Variants = useMemo(() => ({
    hidden: {
      opacity: 0,
      y: "0.25em",
    },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        duration,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }), [duration]);

  // Optimized animation control
  const handleAnimation = useCallback(async () => {
    if (inView) {
      await ctrls.start("visible");
    }
  }, [ctrls, inView]);

  useEffect(() => {
    handleAnimation();
  }, [handleAnimation]);

  // Memoize the split words to prevent unnecessary recalculations
  const words = useMemo(() => children.split(" "), [children]);

  // Memoized rendered content
  const renderedContent = useMemo(() => {
    return words.map((word, wordIndex) => (
      <motion.span
        key={`word-${wordIndex}`}
        initial="hidden"
        animate={ctrls}
        variants={wordAnimation}
        transition={{
          delayChildren: delay + (wordIndex * staggerDelay),
          staggerChildren: 0.05,
        }}
        className={`inline-block whitespace-nowrap select-none ${wordSpace}`}
        style={{ willChange: inView ? 'transform, opacity' : 'auto' }}
      >
        {word.split("").map((character, charIndex) => (
          <motion.span
            key={`char-${wordIndex}-${charIndex}`}
            variants={customCharacterAnimation}
            className={`inline-block ${charSpace}`}
          >
            {character}
          </motion.span>
        ))}
      </motion.span>
    ));
  }, [words, ctrls, wordAnimation, delay, staggerDelay, wordSpace, charSpace, customCharacterAnimation, inView]);

  return (
    <motion.h2 
      ref={ref}
      role="heading" 
      className={className}
      id={id}
      initial="hidden"
      animate={ctrls}
      // Performance optimization
      style={{ willChange: inView ? 'transform, opacity' : 'auto' }}
    >
      {renderedContent}
    </motion.h2>
  );
});

AnimatedTitle.displayName = "AnimatedTitle";

export default AnimatedTitle;