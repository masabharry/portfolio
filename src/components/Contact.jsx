import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: #090909;
  color: white;
  scroll-margin-top: 100px;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #6dd5fa;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  input,
  textarea {
    padding: 1rem;
    border: none;
    border-bottom:2px solid #fff;
    // border-radius: 8px;
    background: transparent;
    color: #fff;
    font-size: 1rem;
    transition: border 0.3s;
    ou
    &::placeholder {
      color: #888;
    }

    &:focus {
      outline: none;
      // background: #111;
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }

  button {
    align-self: flex-start;
    background: #6dd5fa;
    color: #000;
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: bold;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(109, 213, 250, 0.4);
    }
  }

  .status {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: #6dd5fa;
  }
`;

export function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      'YOUR_SERVICE_ID',     // Replace with your actual EmailJS service ID
      'YOUR_TEMPLATE_ID',    // Replace with your template ID
      e.target,
      'YOUR_PUBLIC_KEY'      // Replace with your public API key
    ).then(
      () => {
        setStatus('Thanks! Message sent.');
        e.target.reset();
      },
      () => {
        setStatus('Oops, something went wrong.');
      }
    );
  };

  return (
    <ContactSection id="contact">
      <ContactTitle>Get in Touch</ContactTitle>
      <ContactForm onSubmit={handleSubmit}>
        <input name="from_name" placeholder="Your Name" required />
        <input name="from_email" type="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
        {status && <div className="status">{status}</div>}
      </ContactForm>
    </ContactSection>
  );
}

