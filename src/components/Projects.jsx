import { projectsData } from '../data';
import Reveal from './Reveal';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <Reveal width="100%">
                    <h2 className="section-title">Featured Projects</h2>
                </Reveal>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <Reveal key={project.id} delay={index * 0.1 + 0.1}>
                            <div className="project-card h-full">
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-tech">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="link-btn github">
                                            GitHub
                                        </a>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-btn live">
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
