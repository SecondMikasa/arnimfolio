"use client";
import React, { memo } from "react";

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

const AnimatedTitle = memo<AnimatedTitleProps>(({
  children,
  className = "",
  wordSpace = "",
  charSpace = "",
  id,
}) => {
  return (
    <h2
      role="heading"
      className={className}
      id={id}
    >
      {children.split(" ").map((word, wordIndex) => (
        <span
          key={`word-${wordIndex}`}
          className={`inline-block whitespace-nowrap select-none ${wordSpace}`}
        >
          {word.split("").map((character, charIndex) => (
            <span
              key={`char-${wordIndex}-${charIndex}`}
              className={`inline-block ${charSpace}`}
            >
              {character}
            </span>
          ))}
        </span>
      ))}
    </h2>
  );
});

AnimatedTitle.displayName = "AnimatedTitle";
export default AnimatedTitle;