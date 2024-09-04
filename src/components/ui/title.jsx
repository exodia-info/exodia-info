"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

export const TypewriterEffectSmooth = ({
  words: initialWords,
  className,
  cursorClassName,
}) => {
  const originalWords = useRef(initialWords);
  const [displayedWords, setDisplayedWords] = useState(initialWords);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAlternate, setIsAlternate] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPaused) return;

      setCurrentIndex((prevIndex) => {
        if (!isDeleting) {
          if (
            prevIndex < displayedWords[displayedWords.length - 1].text.length
          ) {
            return prevIndex + 1;
          } else {
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(true);
            }, 5000); // Pausa di 1 secondo prima di iniziare a cancellare
            return prevIndex;
          }
        } else {
          if (prevIndex > 0) {
            return prevIndex - 1;
          } else {
            setIsDeleting(false);
            setIsAlternate(!isAlternate);
            if (isAlternate) {
              setDisplayedWords(originalWords.current);
            } else {
              setDisplayedWords((prevWords) => [
                ...prevWords.slice(0, -1),
                {
                  text: t("parolaDopo"),
                  className: prevWords[prevWords.length - 1].className,
                },
              ]);
            }
            return 0;
          }
        }
      });
    }, 100);

    return () => clearInterval(timer);
  }, [isDeleting, isAlternate, displayedWords, isPaused, t]);

  const renderWords = () => {
    return (
      <div>
        {displayedWords.map((word, idx) => {
          const isLastWord = idx === displayedWords.length - 1;
          const visibleChars = isLastWord ? currentIndex : word.text.length;
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text
                .split("")
                .slice(0, visibleChars)
                .map((char, index) => (
                  <span
                    key={`char-${index}`}
                    className={cn(`dark:text-white text-black`, word.className)}
                  >
                    {char}
                  </span>
                ))}
              {!isLastWord && visibleChars === word.text.length && (
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
      <div className="overflow-hidden pb-2">
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}
        </div>
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-amber-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
