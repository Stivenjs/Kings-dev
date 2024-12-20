"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface TypingEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export function TypingEffect({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenWords = 1000,
}: TypingEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const nextWord = useCallback(() => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    setIsDeleting(false);
  }, [words.length]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const typeCharacter = () => {
      setCurrentText((current) => {
        const fullWord = words[currentWordIndex];
        const nextChar = fullWord.charAt(current.length);
        return current + nextChar;
      });
    };

    const deleteCharacter = () => {
      setCurrentText((current) => current.slice(0, -1));
    };

    if (isDeleting) {
      if (currentText === "") {
        nextWord();
      } else {
        timeout = setTimeout(deleteCharacter, deletingSpeed);
      }
    } else {
      if (currentText === words[currentWordIndex]) {
        timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else {
        timeout = setTimeout(typeCharacter, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
    nextWord,
  ]);

  return (
    <motion.span
      key={currentText}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      className="inline-block min-w-[20px]"
    >
      {currentText}
    </motion.span>
  );
}
