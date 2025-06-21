import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import {useRef, useEffect} from "react";
const Nav = styled.nav`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(12px);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 12px;
  z-index: 1000;
  width: 80%;
  max-width: 1000px;
  box-shadow: 0 0 20px rgba(109, 213, 250, 0.15);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  color: white;
  &:hover {
    color: #6dd5fa;
    transition: color 0.3s;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
  }

  a:hover {
    color: #6dd5fa;
  }

  @media (max-width: 768px) {
    display: none;
    
  }
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    color: #6dd5fa;
  }
`;

const Dropdown = styled(motion.ul)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 1rem;
  padding: 1.5rem 2rem;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  list-style: none;
  width: 100%;
  max-width: 300px;
  text-align: left; /* Align text to the left */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 0 20px rgba(109, 213, 250, 0.15);

  a {
    display: block;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    text-decoration: none;
    transition: color 0.3s;
    padding: 0.5rem 0;
  }

  a:hover {
    color: #6dd5fa;
  }
`;


export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <Nav ref={navRef}>
      <Logo onClick={() => setMenuOpen(false)}>Masab.dev</Logo>

      <NavLinks>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#aboutpage">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </NavLinks>

      <ToggleButton onClick={() => setMenuOpen((prev) => !prev)}>
  <motion.div
    key={menuOpen ? "close" : "open"}
    initial={{ rotate: -90, opacity: 0 }}
    animate={{ rotate: 0, opacity: 1 }}
    exit={{ rotate: 90, opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {menuOpen ? <FaTimes /> : <FaBars />}
  </motion.div>
</ToggleButton>


      <AnimatePresence>
        {menuOpen && (
          <Dropdown
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#aboutpage" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </Dropdown>
        )}
      </AnimatePresence>
    </Nav>
  );
}
