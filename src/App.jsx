import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home, Projects, Skills, Contact } from './Pages';
import { Navbar, Particles } from './Components';
import { ToastContainer, toast } from 'react-toastify';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación (en milisegundos)
    
    });
  }, []);

  return (
    <div className="text-light Container-Portfolio" style={{ position: 'relative', overflow: 'hidden' }}>
      <Particles />

      <section id="Home" data-aos="fade-up">
        <Home />
      </section>

      <section id="skills" data-aos="fade-up">
        <Skills />
      </section>

      <section id="projects" data-aos="fade-up">
        <Projects />
      </section>

      <section id="contact" data-aos="fade-up">
        <Contact />
      </section>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />
    </div>
  );
}

export default App;
