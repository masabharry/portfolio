// src/App.jsx
import React from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
// import { ResumeDownload } from './components/ResumeDownload';
import { motion } from 'framer-motion';
import './App.css';
import { CustomCursor } from './components/CustomCursor';
import { About } from './components/About';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{backgroundColor: '#090909'}}>
      <CustomCursor/>
      <Header/>
      <Hero />
      <Skills />
      <Projects />
      <About/>
      <Contact />
      <Footer/>
    </motion.div>
  );
}

