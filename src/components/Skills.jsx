// src/components/Skills.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 4rem 2rem;
  background: #0a0a0a;
  color: white;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  &:hover {
    color: #6dd5fa;
  }
`;

const SkillsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
display: flex;
flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  width: 70%;
`;

const SkillBox = styled(motion.div)`
  background: rgba(31, 31, 31, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 1rem ;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
 width: 120px;
 @media (max-width: 768px) {
    width: 100%;
 }
  &:hover {
    border: 1px solid #6dd5fa;
    box-shadow: 0 0 15px #6dd5fa66;
    transform: scale(1.05);
    color: #6dd5fa;
  }

  .bar-container {
    width: 100%;
    height: 6px;
    background: #222;
    border-radius: 4px;
    margin-top: 0.75rem;
    overflow: hidden;
  }

  .bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #6dd5fa, #2193b0);
    width: 0%;
    transition: width 0.5s ease;
  }

  &:hover .bar-fill {
    width: var(--skill-level);
  }
`;


const skills = [
  { name: "React.js", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "Python", level: 80 },
  { name: "Node.js", level: 88 },
  { name: "MongoDB", level: 85 },
  { name: "MySQL", level: 70 },
  { name: "PostgreSQL", level: 75 },
  { name: "React Native", level: 85 },
];



export function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ padding: "4rem 2rem", background: "#0a0a0a", color: "white", display: "flex", flexDirection: "column", alignItems: "center",scrollMarginTop: '100px'}}
    >
      <Title
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tech Stack
      </Title>
<SkillsGrid>
  {skills.map((skill, i) => (
    <SkillBox
      key={i}
      style={{ "--skill-level": `${skill.level}%` }}
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      viewport={{ once: true }}
      transition={{
        delay: i * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {skill.name}
      <div className="bar-container">
        <div className="bar-fill" />
      </div>
    </SkillBox>
  ))}
</SkillsGrid>


    </motion.section>
  );
}
