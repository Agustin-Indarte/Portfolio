import React from 'react';

import SliderSkills from '../../Components/SliderSkills/SliderSkills';



function Skills() {
  const habilidadesTecnicas = [
    {
      title: 'JS',
      description: 'Lógica de cliente',
      background: 'linear-gradient(to right, #f0db4f, #f7e018)',
      type: 'Técnica',
      level: 'Intermedio'
    },
    {
      title: 'React',
      description: 'UI components',
      background: 'linear-gradient(to right, #61dafb, #007acc)',
      type: 'Técnica',
      level: 'Intermedio'
    },
    {
      title: 'Git',
      description: 'Control de versiones',
      background: 'linear-gradient(to right, #f1502f, #e44d26)',
      type: 'Técnica',
      level: 'Intermedio'
    },
    {
      title: 'Bootstrap',
      description: 'Framework de estilos',
      background: 'linear-gradient(to right, #563d7c, #7952b3)',
      type: 'Técnica',
      level: 'Intermedio'

    },
    {
      title: 'Figma',
      description: 'Diseño UI/UX',
      background: 'linear-gradient(to right, #a259ff, #f24e1e)',
      type: 'Técnica',
      level: 'Básico'
    },
    {
      title: 'Firebase',
      description: 'Base de datos en la nube',
      background: 'linear-gradient(to right, #ffca28, #ffa000)',
      type: 'Técnica',
      level: 'Básico'
    },

    // HABILIDADES BLANDAS
    {
      title: 'Creatividad',
      description: 'Propuestas originales y visión innovadora',
      background: 'linear-gradient(to right, #ff9a9e, #fad0c4)',
      type: 'Blanda',
      level: 'Alto'
    },
    {
      title: 'Colaboración',
      description: 'Colaboración y apoyo entre pares',
      background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
      type: 'Blanda',
      level: 'Medio'
    },
    {
      title: 'Razonamiento',
      description: 'Análisis y toma de decisiones informadas',
      background: 'linear-gradient(to right, #667eea, #764ba2)',
      type: 'Blanda',
      level: 'Alto'
    },
    {
      title: 'Resolución',
      description: 'Búsqueda de soluciones efectivas',
      background: 'linear-gradient(to right, #f7971e, #ffd200)',
      type: 'Blanda',
      level: 'Medio'
    },
    {
      title: 'Liderazgo',
      description: 'Capacidad para guiar y transmitir ideas',
      background: 'linear-gradient(to right, #43e97b, #38f9d7)',
      type: 'Blanda',
      level: 'Alto'
    },
    {
      title: 'Organización',
      description: 'Gestión del tiempo y tareas con enfoque',
      background: 'linear-gradient(to right, #ffecd2, #fcb69f)',
      type: 'Blanda',
      level: 'Alto'
    }
  ];



  return (
    <section className="skills-section d-flex flex-column justify-content-center text-light vh-100">

      <h2 className="floating-title Titulos text-center mb-4 d-flex justify-content-center align-items-center gap-2">
        Habilidades
      </h2>
      <div className="mt-5">
        <SliderSkills items={habilidadesTecnicas} />
      </div>

    </section>
  );
}

export default Skills;
