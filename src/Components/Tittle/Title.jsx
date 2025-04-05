import React from 'react';
import './Title.css';

const Title = () => {
  return (
    <div className="loader">
      <div className="Container-words">
        <div className="word-slider">
          <div className="word">Técnico en Informática</div>
          <div className="word">Desarrollador Frontend</div>
          <div className="word">Scrum Master</div>
          <div className="word">Estudiante FullStack</div>
          <div className="word">Técnico en Informática</div> {/* ← repetida para loop sin corte */}
        </div>
      </div>
    </div>
  );
};

export default Title;
