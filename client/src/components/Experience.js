import React from 'react';
import { Card } from 'react-bootstrap';

const Experience = () => {
  return (
    <section className="experience-section py-5">
      <h2 className="section-title mb-4">Experience</h2>
      <Card className="experience-card">
        <Card.Body className="p-4">
          <h3 className="position-title mb-4">IT professional</h3>
          
          <p className="description">
            Provides software to streamline processes and increase efficiency.
          </p>

          <div className="mb-4">
            <h4 className="responsibilities-title">Main Responsibilities</h4>
            <ul className="responsibilities-list">
              <li>Led 30+ primary research projects on enterprise IT infrastructure</li>
              <li>Conducted and analyzed 150+ expert interviews annually</li>
              <li>Developed and maintained analytical models</li>
            </ul>
          </div>

          <div>
            <h4 className="tech-stack-title">Tech Stack</h4>
            <div className="tech-stack">
              <span className="tech-item">React</span>
              <span className="tech-item">TypeScript</span>
              <span className="tech-item">Node.js</span>
              <span className="tech-item">PostgreSQL</span>
              <span className="tech-item">Git</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Experience;