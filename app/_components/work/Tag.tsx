import React from "react";

export default function Tag({ 
  children, 
  className = "",  
  style = {} 
}: { 
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span 
      className={`
        uppercase whitespace-nowrap text-sm md:text-base
        px-3 py-1 md:py-2 md:px-4
        rounded-md font-medium md:font-semibold
        bg-gradient-to-r from-[rgba(var(--background-surface),0.7)] to-[rgba(var(--background-surface),0.4)]
        border border-[rgba(var(--border-color),0.3)]
        text-[rgb(var(--accent-primary))]
        flex items-center justify-center
        transition-all duration-300
        hover:scale-105 hover:shadow-sm hover:shadow-[rgba(var(--accent-primary),0.2)]
        ${className}
      `}
      style={style}
    >
      {children}
    </span>
  );
}