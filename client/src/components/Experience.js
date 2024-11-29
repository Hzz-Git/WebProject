import React from 'react';
import { Card } from 'react-bootstrap';

const ExperienceCard = ({ title, company, location, period, description, responsibilities }) => (
  <Card className="experience-card mb-4">
    <Card.Body className="p-4">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <div>
          <h3 className="position-title mb-1">{title}</h3>
          <p className="company-name mb-1">{company} | {location}</p>
        </div>
        <span className="period">{period}</span>
      </div>
      
      <p className="description mb-4">{description}</p>
      
      {responsibilities && (
        <div>
          <h4 className="responsibilities-title mb-3">Main Responsibilities</h4>
          <ul className="responsibilities-list">
            {responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
      )}
    </Card.Body>
  </Card>
);

const Experience = () => {
  const experiences = [
    {
      title: "Associate",
      company: "proSapient",
      location: "Toronto, Canada",
      period: "05/2022 - 07/2023",
      description: "Coordinate research with top Management Consulting, Private Equity firms, & Hedge Fund teams for their business and technical clients on strategy, Due Diligence, and industry research projects.",
      responsibilities: [
        "Led 30+ primary research projects on enterprise IT infrastructure and security solutions, conducting in-depth interviews with CIOs and IT directors to analyze implementation challenges across Fortune 500 companies",
        "Conducted and analyzed 150+ expert interviews annually on enterprise IT transformation, producing detailed reports on network infrastructure challenges and cloud adoption strategies",
        "Delivered 20+ comprehensive market intelligence reports on cloud computing and network technology adoption, analyzing $50M+ technology investment decisions for PE firms and consulting clients",
        "Developed and maintained a database of 200+ expert interviews focusing on emerging trends in enterprise security and cloud infrastructure"
      ]
    },
    {
      title: "Equity Researcher",
      company: "Shanxi Securities Co., Ltd",
      location: "Beijing, China",
      period: "2019",
      description: "",
      responsibilities: [
        "Developed and maintained analytical models tracking 200+ market indicators across 5 industry sectors, delivering weekly data-driven insights that contributed to portfolio risk optimization and 20% improved reporting efficiency"
      ]
    },
    {
      title: "IT Specialist",
      company: "STEM Canada",
      location: "Toronto, Canada",
      period: "09/2024 - Present",
      description: "",
      responsibilities: [
        "Spearhead technical operations for STEM education initiatives, managing digital platforms and providing IT support for nationwide programs serving diverse student communities",
        "Collaborate with education teams to optimize virtual learning tools and technical infrastructure, contributing to expanded program reach and improved accessibility"
      ]
    }
  ];

  return (
    <section className="experience-section py-5">
      <h2 className="section-title mb-4">Experience</h2>
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </section>
  );
};

export default Experience;