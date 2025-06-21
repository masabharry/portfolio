import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Cursor = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  background: #6dd5fa; // Soft pink glow
  border: 2px solidrgb(42, 64, 71);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  backdrop-filter: blur(4px);
`;

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <Cursor
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
};
