"use client";
import { motion } from "framer-motion";
import getRandomColor from "../utils/getRandomColor";
import { useEffect, useState } from "react";
const MotionSpan = motion.span;

const AnimatedTitle = ({ text }: { text: string }) => {
  const letters = text.split("");
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    if (letters.length && !colors.length) {
      // Gera cores e rotações aleatórias
      const newColors = letters.map(() => getRandomColor());
      setColors(newColors);
    }
  }, [letters, colors]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Anima cada letra com um intervalo de 0.1s
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 0 }, // Começa invisível
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    }, // Anima para visível
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      {letters.map((letter, index) => (
        <MotionSpan
          key={index}
          custom={index}
          style={{
            color: colors[index],
            margin: "3px",
            textShadow: `2px 2px 0 #FFFFFF, -2px -2px 0 #FFFFFF, 2px -2px 0 #FFFFFF, -2px 2px 0 #FFFFFF`,
            display: "inline-block", // Garante que cada letra seja tratada como bloco
          }}
          variants={child} // Variantes de animação para cada letra
        >
          {letter === " "
            ? "\u00A0" /* HTML entity for non-breaking space */
            : letter}
        </MotionSpan>
      ))}
    </motion.div>
  );
};

export default AnimatedTitle;
