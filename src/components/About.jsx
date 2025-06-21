import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { StackedExperience } from "./StackedExperience";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #0a0a0a;
  color: white;
  padding: 4rem 2rem;
  // gap: 4rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 4rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  text-align: center;
  
  img {
    max-width: 300px;
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 0 20px #6dd5fa33;
  }
    @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const InfoContainer = styled.div`
  flex: 2;
  max-width: 700px;
`;

const ToggleButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const ToggleButton = styled(motion.button)`
  padding: 0.6rem 1.2rem;
  background: ${({ active }) => (active ? "#6dd5fa" : "#1a1a1a")};
  color: ${({ active }) => (active ? "#000" : "#fff")};
  border: 2px solid #6dd5fa;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: 0.3s;
  box-shadow: ${({ active }) => (active ? "0 0 10px #6dd5fa88" : "none")};
  &:hover {
    background: #6dd5fa66;
    color: #000;
  }
`;

const Content = styled.div`
  line-height: 1.7;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  h3 {
    color: #6dd5fa;
    margin-bottom: 0.8rem;
  }

  p {
    color: #ccc;
    margin-bottom: 1rem;
  }
`;

const ContentCard = styled(motion.div)`
  width: 80%;
  //   min-height: 400px;
  background: #1c1c1c;
  padding: 1.5rem;
  border-radius: 12px;
  overflow: hidden;
  text-align: left;
  box-shadow: 0 0 10px #0004;
  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    color: #6dd5fa;
    margin-bottom: 0.5rem;
  }

  p {
    color: #aaa;
    flex-grow: 1;
    margin-bottom: 1rem;
  }
`;

export function About() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <PageWrapper id="aboutpage" style={{ scrollMarginTop: "100px" }}>
      <ImageContainer>
        <img src="/assets/new.jpeg" alt="Muhammad Masab" />
      </ImageContainer>

      <InfoContainer>
        <ToggleButtons>
          <ToggleButton
            active={activeTab === "about"}
            onClick={() => setActiveTab("about")}
            whileTap={{ scale: 0.95 }}
          >
            About
          </ToggleButton>
          <ToggleButton
            active={activeTab === "experience"}
            onClick={() => setActiveTab("experience")}
            whileTap={{ scale: 0.95 }}
          >
            Experience
          </ToggleButton>
          <ToggleButton
            active={activeTab === "education"}
            onClick={() => setActiveTab("education")}
            whileTap={{ scale: 0.95 }}
          >
            Education
          </ToggleButton>
        </ToggleButtons>

        <Content>
          {activeTab === "about" && (
            <ContentCard
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <h3>Hi, I'm Muhammad Masab</h3>
              <p>
                I’m a self-taught full-stack developer passionate about building
                elegant, efficient, and scalable web and mobile solutions. With
                strong communication skills, business sense, and a hunger to
                keep learning, I thrive in creative and technical environments.
                I specialize in React.js, React Native, Node.js, TypeScript,
                MongoDB, and also explore modern libraries like Three.js, Framer
                Motion, and Fiber.
              </p>
            </ContentCard>
          )}

          {activeTab === "experience" && <StackedExperience />}

          {activeTab === "education" && (
            <ContentCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3>High School Diploma</h3>
              <p>Govt. High School Sultanabad, Sargodha</p>
              <p>
                Although I couldn’t complete secondary education due to personal
                circumstances, I’ve developed a solid foundation in math,
                science, and English through self-learning. My technical growth
                today reflects my commitment to lifelong learning and
                resilience.
              </p>
            </ContentCard>
          )}
        </Content>
      </InfoContainer>
    </PageWrapper>
  );
}
