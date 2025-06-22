import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StackWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  height: 620px;
  padding-top: 1rem;
`;

const Card = styled(motion.div)`
  position: absolute;
  top: ${({ index }) => index * 40}px;
  left: 0;
  width: 80%;
  padding: 1.5rem;
  border-radius: 14px;
  background: ${({ isHovered }) => (isHovered ? "#1c1c1c" : "#1c1c1c")};
  color: ${({ isHovered }) => (isHovered ? "#000" : "#fff")};
  box-shadow: ${({ isHovered }) =>
    isHovered
      ? "0 0 25px rgba(109, 213, 250, 0.4)"
      : "0 0 8px rgba(0, 0, 0, 0.2)"};
  transition: background 0.3s ease, color 0.3s ease;
  z-index: ${({ z }) => z};
  cursor: pointer;
  overflow: hidden;

  h3 {
    color: ${({ isHovered }) => (isHovered ? "#6dd5fa" : "#6dd5fa")};
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;
  }

  p {
    color: ${({ isHovered }) => (isHovered ? "#fff" : "#eee")};
    transition: color 0.3s ease;
  }
`;

const experiences = [
  {
    title: "Full Stack Developer — Rox Capital",
    date: "2024 - Present · Islamabad",
    description:
      "Leading scalable apps using React.js, React Native, Node.js, and Three.js. Delivered immersive 3D UIs and full-stack features.",
  },
  {
    title: "CSR — US Debt Relief Program",
    date: "2023 · Islamabad",
    description:
      "Handled US clients in a high-volume call center. Managed support and debt queries with empathy and clear communication.",
  },
  {
    title: "Frontend Developer — PixelOne",
    date: "Feb 2022 - Aug 2022 · Lahore",
    description:
      "Developed responsive UIs using React (TSX), integrated APIs, built components with Storybook, and improved performance.",
  },
];

export function StackedExperience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <StackWrapper>
      {experiences.map((exp, index) => (
        <Card
          key={index}
          index={index}
          z={hoveredIndex === index ? 10 : index}
          isHovered={hoveredIndex === index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={{ scale: 1, y: index * 40 }}
          animate={{
            scale: hoveredIndex === index ? 1.07 : 1,
            y: hoveredIndex === index ? index * 40 - 30 : index * 40,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
        >
          <h3>{exp.title}</h3>
          <p>{exp.date}</p>
          <p>{exp.description}</p>
        </Card>
      ))}
    </StackWrapper>
  );
}
