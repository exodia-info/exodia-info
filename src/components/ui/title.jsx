"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TypewriterEffectSmooth = ({
  words: initialWords,
  className,
  cursorClassName,
}) => {
  const [words, setWords] = useState(initialWords);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverPosition, setHoverPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWords((prevWords) => [
        ...prevWords.slice(0, -1),
        { text: "nuova", className: prevWords[prevWords.length - 1].className },
        {
          text: "parola",
          className: prevWords[prevWords.length - 1].className,
        },
      ]);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setHoverPosition(Math.max(0, Math.min(100, percent)));
  }, []);

  const renderWords = () => {
    return (
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {words.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block relative">
              <span
                className={cn(`dark:text-white text-black`, word.className)}
              >
                {word.text}
              </span>
              {idx === words.length - 1 && isHovering && (
                <motion.span
                  className="absolute top-0 left-0 h-full bg-blue-500"
                  style={{
                    width: `${hoverPosition}%`,
                    clipPath: `inset(0 ${100 - hoverPosition}% 0 0)`,
                  }}
                  transition={{ duration: 0 }}
                >
                  {word.text}
                </motion.span>
              )}
              {idx < words.length - 1 && (
                <span className="inline-block">&nbsp;</span>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 1 }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-amber-500",
          cursorClassName
        )}
      />
    </div>
  );
};
