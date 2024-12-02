
import React from 'react';


const ProjectCard = ({ project }) => {
  const techStack = Array.isArray(project.tech_stack) 
    ? project.tech_stack 
    : project.tech_stack?.split(',') || [];

  return (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      {project.status && (
        <div className="project-status">
          {project.status}
        </div>
      )}
      <p className="project-description">
        {project.description}
      </p>
      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-badge">
            {tech.trim()}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a 
          href={project.github_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-link"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;