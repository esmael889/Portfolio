import { personalData } from '../data';
import Reveal from './Reveal';
import './Hero.css';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <Reveal delay={0.1}>
                        <h1 className="hero-title">
                            Hi, I'm Esmael Mosad <span className="highlight">
                                <Typewriter
                                    options={{
                                        strings: [personalData.name, "a Developer", "a Creator"],
                                        autoStart: true,
                                        loop: true,
                                        side: true
                                    }}
                                />
                            </span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h2 className="hero-subtitle">
                            {personalData.role}
                        </h2>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <p className="hero-description">
                            Specializing in building exceptional digital experiences with
                            <span className="tech-highlight"> React</span>,
                            <span className="tech-highlight"> Angular</span>, and
                            <span className="tech-highlight"> Node.js</span>.
                        </p>
                        <div className="hero-buttons">
                            <a href="#projects" className="btn primary">View My Work</a>
                            <a href="#contact" className="btn secondary">Contact Me</a>
                            <a href="/resume.pdf?v=2" download className="btn secondary outline">Download CV</a>
                        </div>
                    </Reveal>
                </div>
                <div className="hero-visual">
                    <Reveal delay={0.5}>
                        <div className="img-container">
                            <img src={personalData.profileImage} alt={personalData.name} className="profile-img" />
                            <div className="blob-bg"></div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Hero;
