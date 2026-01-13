import { personalData } from '../data';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p className="footer-text">
                    Designed & Built by <span className="highlight-text">{personalData.name}</span>
                </p>
                <p className="copyright">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
