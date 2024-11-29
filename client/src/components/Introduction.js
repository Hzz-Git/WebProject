import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Introduction = () => {
  return (
    <section className="introduction-section py-5">
      <Row>
        <Col md={8}>
          <div className="intro-content">
            <h2 className="h3 mb-4">Summary</h2>
            <p className="intro-text mb-4">
              Detail-oriented and versatile IT professional with a bachelor's degree 
              in mathematics and currently pursuing a master's in information 
              technology. Over 2 years of experience in data analysis and IT project 
              management, including software solution procurement and change management.
            </p>
            <p className="intro-text">
              Adept at troubleshooting, system configuration, and providing technical 
              support in remote settings. Specialized in frontend development with 
              a focus on creating interactive and efficient web solutions.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Introduction;