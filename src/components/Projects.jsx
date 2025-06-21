import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaImage } from "react-icons/fa";

const Section = styled.section`
  padding: 4rem 2rem;
  background: #111;
  color: white;
  text-align: center;
  
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ToggleButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const ToggleButton = styled(motion.button)`
  padding: 0.8rem 2rem;
  background: ${({ active }) => (active ? "#6dd5fa" : "#1a1a1a")};
  color: ${({ active }) => (active ? "#000" : "#fff")};
  border: 2px solid #6dd5fa;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: 0.3s;
  box-shadow: ${({ active }) => (active ? "0 0 10px #6dd5fa88" : "none")};
  &:hover {
    background: #6dd5fa66;
    color: #000;
  }
`;

const ProjectCards = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  width: 300px;
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

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

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

const VisitLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #6dd5fa;
  color: #000;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s ease;
  &:hover {
    background: #48c7f5;
  }
`;

const NoAccess = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  color: #999;
  background: #333;
  border-radius: 6px;
  font-size: 0.9rem;
`;

const allProjects = [
  {
    id: 1,
    name: "Cricket App",
    description: "A mobile app for cricket stats and player ranking.",
    image: "https://via.placeholder.com/300x160",
    category: "Mobile",
    url: "",
  },
  {
    id: 2,
    name: "School Management System",
    description: "MERN stack web app with full admin panel.",
    image: "https://via.placeholder.com/300x160",
    category: "Web",
    url: "",
  },
  {
    id: 3,
    name: "Auth API Service",
    description: "Node.js and MongoDB backend for user authentication.",
    image: "https://via.placeholder.com/300x160",
    category: "Backend",
    url: "", // No URL
  },
  {
    id: 4,
    name: "Portfolio Website",
    description: "Modern web developer portfolio built with React.",
    image: "https://via.placeholder.com/300x160",
    category: "Web",
    url: "https://malikmasab.netlify.app",
  },
];

export function Projects() {
  const [filter, setFilter] = useState("Mobile");
const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (projectId) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };



  const filteredProjects = allProjects.filter(
    (proj) => proj.category === filter
  );

  return (
    <Section id="projects" style={{scrollMarginTop: '100px'}}>
      <Title
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </Title>

      <ToggleButtons>
        {["Mobile", "Web", "Backend"].map((cat) => (
          <ToggleButton
            key={cat}
            active={filter === cat}
            onClick={() => setFilter(cat)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </ToggleButton>
        ))}
      </ToggleButtons>

      <AnimatePresence mode="wait">
        <ProjectCards layout>
          {filteredProjects.map((project) => {
            const imageFailed = imageErrors[project.id];

            const CardContent = (
              <ProjectCard
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                {imageFailed ? (
                  <div
                    style={{
                      width: "100%",
                      height: "160px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#2a2a2a",
                      borderRadius: "8px",
                      marginBottom: "1rem",
                    }}
                  >
                    <FaImage size={40} color="#666" />
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.name}
                    onError={() => handleImageError(project.id)}
                  />
                )}

                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </ProjectCard>
            );

            return project.url ? (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
                layout
              >
                {CardContent}
              </motion.a>
            ) : (
              <div key={project.id}>
                {CardContent}
                <NoAccess>No Access 🚫</NoAccess>
              </div>
            );
          })}
        </ProjectCards>
      </AnimatePresence>
    </Section>
  );
}
