import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

/**
 * A mock array of projects with:
 * - id: unique identifier
 * - title: project title
 * - description: short summary
 * - link: GitHub repo link
 * - demo: optional live demo link
 * - image: optional screenshot/thumbnail
 * - techStack: array of strings for technologies
 * - category: e.g. "Frontend", "Backend", "Fullstack", etc.
 * - featured: boolean indicating if it's a featured/pinned project
 */
const projectData = [
    {
        id: 1,
        title: 'React Portfolio',
        description: 'A personal portfolio website built with React.',
        link: 'https://github.com/yourusername/react-portfolio',
        demo: 'https://yourportfolio.live', // optional
        image:
            'https://i.postimg.cc/43DSx6nW/portfolio-ss.png', // placeholder
        techStack: ['React', 'CSS', 'JavaScript'],
        category: 'Frontend',
        featured: true,
    },
    {
        id: 2,
        title: 'Node.js REST API',
        description: 'A RESTful API built using Node.js and Express.',
        link: 'https://github.com/yourusername/nodejs-api',
        demo: '', // or 'https://myawesomeapi.com'
        image:
            'https://via.placeholder.com/600x400/336600/ffffff?text=Node.js+REST+API', // placeholder
        techStack: ['Node.js', 'Express', 'MongoDB'],
        category: 'Backend',
        featured: false,
    },
    {
        id: 3,
        title: 'Fullstack E-Commerce',
        description: 'MERN stack e-commerce app with user login and cart system.',
        link: 'https://github.com/yourusername/fullstack-ecommerce',
        demo: 'https://myecommerce.live',
        image:
            'https://i.postimg.cc/hvbwwXDp/famms-1.png', // placeholder
        techStack: ['React', 'Node.js', 'MongoDB'],
        category: 'Fullstack',
        featured: false,
    },
    {
        id: 4,
        title: 'Landing Page Design',
        description: 'A responsive landing page with advanced CSS animations.',
        link: 'https://github.com/yourusername/landing-page',
        demo: '',
        image:
            'https://via.placeholder.com/600x400/993366/ffffff?text=Landing+Page', // placeholder
        techStack: ['HTML', 'CSS', 'JavaScript'],
        category: 'Frontend',
        featured: false,
    },
];

/**
 * A simple array of categories to filter by.
 * Include "All" to show all projects.
 */
const categories = ['All', 'Frontend', 'Backend', 'Fullstack'];

function Projects() {
    const [activeCategory, setActiveCategory] = useState('All');

    // Filter logic: if "All," show everything. Otherwise, match the project's category.
    const filteredProjects =
        activeCategory === 'All'
            ? projectData
            : projectData.filter((p) => p.category === activeCategory);

    return (
        <section className="projects-section">
            <h2>My Projects</h2>
            <p className="projects-subtitle">
                Explore some of my work below. Filter by category or check out featured
                projects!
            </p>

            {/* Category Filter Buttons */}
            <div className="categories">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={cat === activeCategory ? 'active' : ''}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Projects Grid (Framer Motion) */}
            <div className="projects-grid">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* If the project is featured, show a small badge or pin */}
                            {project.featured && <span className="featured-badge">Featured</span>}

                            {/* Image Section (optional) */}
                            {project.image && (
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                </div>
                            )}

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                {/* Tech Stack Badges */}
                                <div className="project-tech">
                                    {project.techStack.map((tech, i) => (
                                        <span className="tech-badge" key={i}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="project-links">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        GitHub
                                    </a>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link demo-link"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
}

export default Projects;
