import { skillsData } from '../data';
import Reveal from './Reveal';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <Reveal width="100%">
                    <h2 className="section-title">Skills & Expertise</h2>
                </Reveal>
                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <Reveal key={index} delay={index * 0.1 + 0.1}>
                            <div className="skills-category h-full">
                                <h3 className="category-title">{category.category}</h3>
                                <div className="skills-list">
                                    {category.items.map((skill, i) => (
                                        <span key={i} className="skill-item">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
