import { personalData } from '../data';
import Reveal from './Reveal';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <Reveal>
                    <h2 className="section-title">About Me</h2>
                </Reveal>
                <div className="about-content">
                    <Reveal delay={0.2}>
                        <div className="about-text">
                            <p className="about-bio">
                                {personalData.bio}
                            </p>
                            <p>
                                With a strong foundation in both frontend and backend technologies,
                                I enjoy bridging the gap between engineering and design.
                                My goal is to always build applications that are scalable and efficient
                                under the hood while providing engaging, pixel-perfect user experiences.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default About;
