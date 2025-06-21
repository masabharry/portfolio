// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";

const FooterWrapper = styled.footer`
  background: #0a0a0a;
  padding: 2rem 1rem;
  text-align: center;
  color: #888;
  border-top: 1px solid #222;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;

  a {
    color: #fff;
    font-size: 1.8rem;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      color: #6dd5fa;
      transform: scale(1.2);
    }
  }
`;

const CopyRight = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

export function Footer() {
  return (
    <FooterWrapper>
      <SocialIcons>
        <a href="https://github.com/masabharry" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-masab-masab-969338368/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:muhammadmasab6297@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://www.instagram.com/mdma5ab/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://wa.me/923166297912" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://x.com/mdmasab6297" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </SocialIcons>
      <CopyRight>© {new Date().getFullYear()} Muhammad Masab. All rights reserved.</CopyRight>
    </FooterWrapper>
  );
}
