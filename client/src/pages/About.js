import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import ContactForm from '../components/ContactForm';  // Add this import

const About = () => {
  return (
    <div className="container about-section">
      <h1 className="about-title">About Me</h1>

      <div className="about-content">
        <p className="intro-paragraph">
          <span className="wave-emoji">👋</span> Hi, I'm Zeng, an IT Professional specialized in{' '}
          <span className="highlight">IT Infrastructure and Development</span>, with a focus on 
          optimizing systems and solving complex technology challenges.
        </p>

        <p className="tech-paragraph">
          I work with{' '}
          <span className="highlight">Python</span> and{' '}
          <span className="highlight">JavaScript</span> to develop{' '}
          <span className="highlight">intuitive solutions</span> that bring tangible value to
          businesses. I am passionate about IT infrastructure and currently expanding my knowledge in{' '}
          <span className="highlight">network management</span>,{' '}
          <span className="highlight">system integration</span>, and{' '}
          <span className="highlight">cloud computing</span>.
        </p>

        <p className="motivation-paragraph">
          I am motivated by collaborating with diverse teams and developing innovative solutions that generate
          significant results. I am always looking for challenges that allow me to keep growing and contribute to
          the advancement of the <span className="highlight">tech world</span>.
        </p>

        <div className="contact-section">
          <h2 className="contact-title">You can reach me with the following medias 👇</h2>
          
          <div className="social-links">
            <a 
              href="mailto:z354hao@outlook.com" 
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={20} />
              <span>Mail</span>
            </a>

            <a 
              href="https://linkedin.com/in/zeng-hao-z354" 
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>

            <a 
              href="https://github.com/Hzz-Git" 
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>

          {/* Add this new section */}
          <div className="message-section">
            <h2>Or send me a message directly ✍️</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;