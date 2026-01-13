import { achievementsData } from '../data';
import Reveal from './Reveal';
import './Achievements.css';

const Achievements = () => {
    return (
        <section id="achievements" className="achievements">
            <div className="container">
                <Reveal width="100%">
                    <h2 className="section-title">Instructor Journey</h2>
                    <p className="achievements-subtitle">Empowering the next generation of developers</p>
                </Reveal>

                <div className="stats-grid">
                    {achievementsData.stats.map((stat, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="stat-card">
                                <h3 className="stat-value">{stat.value}</h3>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.3} width="100%">
                    <h3 className="gallery-title">Memorable Moments</h3>
                </Reveal>

                <div className="gallery-grid">
                    {achievementsData.gallery.map((item, index) => (
                        <Reveal key={item.id} delay={index * 0.1}>
                            <div className="gallery-item">
                                <img src={item.src} alt={item.alt} loading="lazy" />
                                <div className="gallery-overlay">
                                    <span>{item.alt}</span>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
