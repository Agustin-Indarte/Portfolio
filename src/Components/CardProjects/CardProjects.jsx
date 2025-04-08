import React, { useState } from 'react';
import styled from 'styled-components';

const CardProjects = ({
  title = "Nombre del Proyecto",
  details = "Detalles breves del proyecto que aparecen en la card",
  description = "Descripción completa del proyecto que aparece en el modal",
  technologies = ["html5", "css3", "javascript"],
  githubUrl = "#",
  deployUrl = "#",
  mediaUrl = "",
  mediaType = "image",
  posterUrl = ""
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <StyledWrapper>
        <div className="card-projects">
          {/* Contenedor principal del folder */}
          <div className="card-projects__folder-container">
            {/* Sección superior del folder */}
            <div className="card-projects__top-section">
              <div className="card-projects__border" />
              <div className="card-projects__icons">
                <div className="card-projects__extender" onClick={toggleModal}>
                  <p className='card-projects__text-light'>Ver más</p>
                </div>
                <div className="card-projects__social-media">
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="card-projects__link">
                    <svg className="card-projects__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </a>
                  <a href={deployUrl} target="_blank" rel="noopener noreferrer" className="card-projects__link">
                    <svg className="card-projects__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-projects__title-container">
                <h3 className="card-projects__title">{title}</h3>
              </div>
            </div>
          </div>

          {/* Detalles breves (aparecen en la card) */}
          <p className="card-projects__details">{details}</p>

          {/* Tecnologías */}
          <div className="card-projects__tech-container">
            {technologies.map((tech, index) => (
              <div key={index} className="card-projects__tech-item">
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                  alt={tech}
                  title={tech}
                  onError={(e) => {
                    e.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-plain.svg`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </StyledWrapper>

      {/* Modal con descripción completa */}
      {isModalOpen && (
        <ModalOverlay onClick={toggleModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={toggleModal}>×</CloseButton>
            {mediaUrl && (
              <MediaContainer>
                {mediaType === "image" ? (
                  <img src={mediaUrl} alt={title} className="modal-media" />
                ) : (
                  <video controls className="modal-media" poster={posterUrl}>
                    <source src={mediaUrl} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                )}
              </MediaContainer>
            )}
            <div className='d-flex align-items-center gap-2 mb-3'>
              <ModalTitle>{title}</ModalTitle>
              <ModalDetails>{details}</ModalDetails>
            </div>


            <ModalDescription>{description}</ModalDescription>
            <TechList>
              {technologies.map((tech, index) => (
                <TechItem key={index}>
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                    alt={tech}
                    title={tech}
                    onError={(e) => {
                      e.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-plain.svg`;
                    }}
                  />
                  <span>{tech}</span>
                </TechItem>
              ))}
            </TechList>
            <ButtonGroup>
              {githubUrl ? (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="modal-button">
                  Ver código
                </a>
              ) : (
                <UnavailableMessage>🔒 Código privado</UnavailableMessage>
              )}

              {deployUrl ? (
                <a href={deployUrl} target="_blank" rel="noopener noreferrer" className="modal-button">
                  Ver proyecto
                </a>
              ) : (
                <UnavailableMessage>🚧 Proyecto en construcción</UnavailableMessage>
              )}
            </ButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}

// Estilos para el modal (modificados para posicionar más arriba)
// Estilos para el modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1000;
  backdrop-filter: blur(5px);
  overflow-y: auto;
`;

const ModalContent = styled.div`
  background: #1b233d;
  border-radius: 15px;
  padding: 25px;
  width: 80%;
  max-width: 600px;
  margin-top: 5vh;
  margin-bottom: 5vh;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 15px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.2s;
  line-height: 1;
  &:hover {
    transform: scale(1.2);
  }
`;

const MediaContainer = styled.div`
  width: 100%;
  margin: 15px 0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0f1425;

  .modal-media {
    max-width: 100%;
    max-height: 250px;
    display: block;
    border-radius: 8px;
  }
`;

const ModalTitle = styled.h2`
  color: white;
  font-size: 24px;
  margin: 0;
`;

const ModalDetails = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 0;

`;

const ModalDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
  line-height: 1.5;
  white-space: pre-line;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 5px 10px;
  border-radius: 20px;
  color: white;

  img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  span {
    text-transform: capitalize;
    font-size: 14px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  .modal-button {
    flex: 1;
    padding: 10px 15px;
    border-radius: 5px;
    background: linear-gradient(45deg, rgb(4, 159, 187) 0%, rgb(80, 246, 255) 100%);
    color: white;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(4, 159, 187, 0.4);
    }
  }
`;


// Estilos para la card principal
const StyledWrapper = styled.div`
  .card-projects {
  margin: 30px;
  width: 230px;
  border-radius: 20px;
  background: #1b233d;
  padding: 5px;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 10px;
  animation: float-alt 6s ease-in-out infinite;
}

/* Nueva animación flotante */
@keyframes float-alt {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(3px, -4px) rotate(0.8deg);
  }
  50% {
    transform: translate(0px, -6px) rotate(0deg);
  }
  75% {
    transform: translate(-3px, -4px) rotate(-0.8deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}

  .card-projects:hover {
    transform: scale(1.05);
  }

  .card-projects__top-section {
    height: 150px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(45deg, rgb(4, 159, 187) 0%, rgb(80, 246, 255) 100%);
    position: relative;
  }

  .card-projects__title-container {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    z-index: 2;
    padding: 0 15px;
    box-sizing: border-box;
  }

  .card-projects__title {
    font-size: 18px;
    font-weight: bold;
    color: white;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    letter-spacing: 0.5px;
    background: rgba(27, 35, 61, 0.6);
    padding: 8px 12px;
    border-radius: 20px;
    display: inline-block;
    backdrop-filter: blur(2px);
  }

  .card-projects__details {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
    margin: 8px 15px 5px;
    line-height: 1.4;
    text-align: start;
   
  }

  .card-projects__border {
    border-bottom-right-radius: 20px;
    height: 30px;
    width: 130px;
    background: #1b233d;
    position: relative;
    transform: skew(-40deg);
    box-shadow: -10px -10px 0 0 #1b233d;
  }

  .card-projects__border::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    top: 0;
    right: -15px;
    background: rgba(255, 255, 255, 0);
    border-top-left-radius: 10px;
    box-shadow: -5px -5px 0 2px #1b233d;
  }

  .card-projects__top-section::before {
    content: "";
    position: absolute;
    top: 30px;
    left: 0;
    background: rgba(255, 255, 255, 0);
    height: 15px;
    width: 15px;
    border-top-left-radius: 15px;
    box-shadow: -5px -5px 0 2px #1b233d;
  }

  .card-projects__icons {
    position: absolute;
    top: 0;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .card-projects__extender {
    margin-top: 7%;
    margin-left: 5%;
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .card-projects__extender:hover {
    text-shadow: 0 0 8px rgba(255,255,255,0.6);
  }

  .card-projects__social-media {
    display: flex;
    gap: 7px;
  }

  .card-projects__svg {
    height: 20px;
    width: 20px;
    fill: #1b233d;
    transition: all 0.3s ease;
  }

  .card-projects__svg:hover {
    fill: white;
    transform: translateY(-1px);
  }

  .card-projects__tech-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 5px 10px 15px;
  }

  .card-projects__tech-item {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    background: rgba(255,255,255,0.1);
    border-radius: 4px;
    padding: 2px;
  }

  .card-projects__tech-item:hover {
    transform: scale(1.15);
    background: rgba(255,255,255,0.2);
  }

  .card-projects__tech-item img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: grayscale(20%) brightness(0.9);
    transition: filter 0.3s ease;
  }

  .card-projects__tech-item:hover img {
    filter: grayscale(0%) brightness(1.1);
  }

  .card-projects__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .card-projects__link:hover {
    transform: scale(1.15);
  }
`;

const UnavailableMessage = styled.span`
  background-color: #f8d7da;
  color: #721c24;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #f5c6cb;
  font-weight: 700;
  transition: all 0.3s ease;
`;


export default CardProjects;