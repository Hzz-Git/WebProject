// src/pages/Projects.js
import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Dynamic URL based on environment
        const baseUrl = process.env.NODE_ENV === 'production'
          ? 'https://web-project-flax-nu.vercel.app'
          : 'http://localhost:3001';

        const response = await fetch(`${baseUrl}/api/projects`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="text-center py-5">
          Loading projects...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="alert alert-danger mt-5">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container projects-section">
      <h1 className="section-title">My Projects</h1>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;