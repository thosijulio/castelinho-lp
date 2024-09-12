"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const MotionSpan = motion.span;

const AnimatedSubtitle = ({ textArray }: { textArray: string[] }) => {
  const [currentText, setCurrentText] = useState(textArray[0]);
  const letters = currentText.split("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Alterna entre as frases a cada 3 segundos
      setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      setCurrentText(textArray[index]);
    }, 3000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [index, textArray]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Anima cada letra com um intervalo
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 }, // Anima cada letra de baixo para cima
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      key={currentText} // Chave para forçar a reanimação a cada mudança de frase
    >
      {letters.map((letter, index) => (
        <MotionSpan
          key={index}
          custom={index}
          style={{
            display: "inline-block", // Garante que cada letra seja tratada como bloco
          }}
          variants={child}
        >
          {letter === " " ? "\u00A0" : letter}
        </MotionSpan>
      ))}
    </motion.div>
  );
};

export default AnimatedSubtitle;
