import React, { useState, useEffect } from 'react';
import { AtSign, House, FolderCode, BrainCircuit, MoonStar, Mail, Linkedin, Github, Check } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [isCopied, setIsCopied] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      // Forzamos checkeo de sección activa después del scroll
      requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight * 0.7 &&
          rect.bottom >= window.innerHeight * 0.3
        ) {
          setActiveSection(id);

        }
      });
    }
  };

  // Scroll al top al cargar la página
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 0);
  }, []);

  // Detecta sección activa en base al scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Home', 'skills', 'projects', 'contact'];
      let currentSection = 'Home'; // fallback

      for (let id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight * 0.7 && rect.bottom >= window.innerHeight * 0.3;

          if (isVisible) {
            currentSection = id;

            // 👇 Agregá este console.log para ver si realmente se está actualizando la sección activa
            console.log("Sección activa detectada:", currentSection);

            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
    const initialCheck = setTimeout(() => handleScroll(), 500);

    return () => {
      clearTimeout(initialCheck);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleCopy = () => {
    const textarea = document.createElement('textarea');
    textarea.value = "aindarte111@gmail.com";
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
      }
    } catch (err) {
      window.prompt("Copia este email manualmente:", "aindarte111@gmail.com");
    } finally {
      document.body.removeChild(textarea);
    }
  };

  return (
    <div className="input">

      <button
        className={`value ${activeSection === 'Home' ? 'active' : ''}`}
        onClick={() => scrollToSection('Home')}
      >
        <House />
        <span className="label">Inicio</span>
      </button>

      <button
        className={`value ${activeSection === 'skills' ? 'active' : ''}`}
        onClick={() => scrollToSection('skills')}
      >
        <BrainCircuit />
        <span className="label">Habilidades</span>
      </button>

      <button
        className={`value ${activeSection === 'projects' ? 'active' : ''}`}
        onClick={() => scrollToSection('projects')}
      >
        <FolderCode />
        <span className="label">IProyectos</span>
      </button>

    


      <div className="dropdown">


        <button
          className={`value ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
          <AtSign />
          <span className="label">Contacto</span>
        </button>



        <div className="dropdown-content">
          <a
            href="#email"
            onClick={(e) => {
              e.preventDefault();
              handleCopy();
            }}
            style={{ cursor: "pointer", display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            {isCopied ? <Check /> : <Mail />}
            {isCopied ? '¡Copiado!' : 'Gmail'}
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
          <a href="https://github.com/Agustin-Indarte" target="_blank" rel="noreferrer"><Github /> GitHub</a>
        </div>

      </div>








    </div>
  );
};

export default Navbar;
