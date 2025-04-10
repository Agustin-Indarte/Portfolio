import React from 'react';
import './SliderSkills.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaFigma,
} from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';
import {
  MdLightbulb,
  MdGroups,
  MdPsychology,
  MdBuild,
  MdRecordVoiceOver,
  MdChecklistRtl
} from 'react-icons/md';

function SliderSkills({ items = [], reverse = false }) {
  const quantity = items.length;
  

  const iconMap = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    JS: <FaJsSquare />,
    React: <FaReact />,
    Git: <FaGitAlt />,
    Bootstrap: <FaBootstrap />,
    Figma: <FaFigma />,
    Firebase: <SiFirebase />,
    Creatividad: <MdLightbulb />,
    Colaboración: <MdGroups />,
    Razonamiento: <MdPsychology />,
    Resolución: <MdBuild />,
    Liderazgo: <MdRecordVoiceOver />,
    Organización: <MdChecklistRtl />,
  };

  return (
    <div className={`slider ${reverse ? 'reverse' : ''}`}
      style={{
        '--width': '200px',
        '--height': '200px',
        '--quantity': quantity,
      }}>
      <div className="slider-list">
        {items.map((item, index) => (
          <div className="slider-item" style={{ '--position': index + 1 }} key={index}>
            <div className="skill-card" style={{ background: item.background }}>
              <div className="card-content">
                <div className="card-back">
                  <div className="back-content">
                    <div className="card-icon">{iconMap[item.title]}</div>
                    <strong className="card-title">{item.title}</strong>
                  </div>
                </div>
                <div className="card-front">
                  <div className="front-img">
                    <div className="circle"></div>
                    <div className="circle right"></div>
                    <div className="circle bottom"></div>
                  </div>
                  <div className="front-content">
                    <small className="skill-badge">{item.type || 'Skill'}</small>
                    <div className="skill-description">
                      <strong className="skill-desc">{item.description}</strong>
                      <p className="skill-level">
                        Nivel | {item.level || 'Básico'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderSkills;