import React, { useState } from 'react';
import { AtSign, House, FolderCode, BrainCircuit, MoonStar, Mail, Linkedin, Github, Check } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  // Función para hacer scroll suave a una sección
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isCopied, setIsCopied] = useState(false);

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
      <div className="dropdown">
        <button className="value" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
          <AtSign />
          Contacto
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
          <a href="https://www.linkedin.com/feed/" target="_blank"><Linkedin /> LinkedIn</a>
          <a href="https://github.com/Agustin-Indarte" target="_blank"><Github /> GitHub</a>
        </div>
      </div>
      <button className="value" onClick={() => scrollToSection('skills')}>
        <BrainCircuit />
        Habilidades
      </button>
      <button className="value" onClick={() => scrollToSection('Home')}>
        <House />
        Inicio
      </button>
      <button className="value" onClick={() => scrollToSection('projects')}>
        <FolderCode />
        Proyectos
      </button>
      <button className="value">
        <MoonStar />
        Modo Oscuro
      </button>
    </div>
  );
};

export default Navbar;