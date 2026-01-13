import { certificatesData } from '../data';
import Reveal from './Reveal';
import './Certificates.css';

const Certificates = () => {
    return (
        <section id="certificates" className="certificates">
            <div className="container">
                <Reveal>
                    <h2 className="section-title">Professional Certifications</h2>
                    <p className="certificates-subtitle">Continuous learning and validation of expertise</p>
                </Reveal>

                <div className="certificates-grid">
                    {certificatesData.map((cert, index) => (
                        <Reveal key={cert.id} delay={index * 0.1} width="100%">
                            <div className="certificate-card">
                                <div className="certificate-image">
                                    <img src={cert.image} alt={cert.title} loading="lazy" />
                                    <div className="certificate-overlay">
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="verify-btn">
                                            Verify Credential
                                        </a>
                                    </div>
                                </div>
                                <div className="certificate-content">
                                    <h3 className="certificate-title">{cert.title}</h3>
                                    <div className="certificate-meta">
                                        <span className="issuer">{cert.issuer}</span>
                                        <span className="date">• {cert.date}</span>
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

export default Certificates;
