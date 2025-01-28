import React from 'react';
import './Projects.css';

function Projects() {
    // Normally, you’d fetch or have a list of projects from a data file or API
    const projects = [
        {
            id: 1,
            title: 'React Portfolio',
            description: 'A personal portfolio website built with React.',
            link: 'https://github.com/yourusername/react-portfolio'
        },
        {
            id: 2,
            title: 'Node.js REST API',
            description: 'A RESTful API built using Node.js and Express.',
            link: 'https://github.com/yourusername/nodejs-api'
        }
        // Add more projects as needed
    ];

    return (
        <section className="projects">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
