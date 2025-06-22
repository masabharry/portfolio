import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { ClothBackground } from './ClothBackground';
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #090909;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroText = styled(motion.div)`
  z-index: 1;
  animation: ${float} 4s ease-in-out infinite;
  color: #fff;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    // hover effect
    &:hover {
      color: #6dd5fa;
      transition: color 0.3s ease-in-out;
    }
  }

  p {
    font-size: 1.2rem;
    color: #6dd5fa; 
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;





export function Hero() {
  return (
    <HeroContainer>
      <ClothBackground/>
      <HeroText
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>I'm Masab — Full Stack Developer</h1>
        <p>Building immersive digital experiences with React, Node, and more.</p>
      </HeroText>
    </HeroContainer>
  );
}