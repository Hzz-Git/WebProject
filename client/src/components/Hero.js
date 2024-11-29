
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ChevronRight, User } from 'lucide-react';

const Hero = ({ isDarkMode }) => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="title-highlight">
          <h1 className="hero-title">Hey! I'm Zeng</h1>
        </div>
        <div className="subtitle-highlight">
          <h2 className="hero-subtitle">
            an IT Professional Dedicated to Optimizing Systems and Solving Complex Technology Challenges.
          </h2>
        </div>
        <div className="hero-buttons mt-4">
          <Button 
            variant={isDarkMode ? "light" : "dark"} 
            className="me-3 d-inline-flex align-items-center"
            onClick={() => navigate('/projects')}
          >
            Projects <ChevronRight size={20} className="ms-2" />
          </Button>
          <Button 
            variant={isDarkMode ? "light" : "dark"}
            className="d-inline-flex align-items-center"
            onClick={() => navigate('/about')}
          >
            About <User size={20} className="ms-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;