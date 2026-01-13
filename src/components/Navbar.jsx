import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        // Check saved theme
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.body.classList.toggle('light-mode', savedTheme === 'light');

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.classList.toggle('light-mode', newTheme === 'light');
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">DevPortfolio</a>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                    <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#achievements" onClick={() => setIsOpen(false)}>Journey</a>
                    <a href="#certificates" onClick={() => setIsOpen(false)}>Certificates</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                </div>

                <div className="nav-controls">
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>

                    <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
                        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
