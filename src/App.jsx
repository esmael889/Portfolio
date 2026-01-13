import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <ParticlesBackground />
      <Navbar />

      <main>
        <Hero />

        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
