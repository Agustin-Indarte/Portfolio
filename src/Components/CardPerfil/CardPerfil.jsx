import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animación de flotación
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const CardPerfil = () => {
  return (
    <StyledWrapper>
      <div className="container noselect">
        <div className="canvas">
        {[...Array(25)].map((_, i) => (
<div key={i} className={`tracker tr-${i + 1}`} />
))}
          <div id="cardPerfil">
            <div className="glass-container">
              <div className="image-wrapper">
                <img src="./Perfil.png" alt="Profile" className="profile-image" />
              </div>
              
              <div className="card-content">
                <div className="cardPerfil-glare" />
                <div className="cyber-lines">
                  <span /><span /><span /><span />
                </div>
               
                <div className="glowing-elements">
                  <div className="glow-1" />
                  <div className="glow-2" />
                  <div className="glow-3" />
                </div>
                <div className="cardPerfil-particles">
                  <span /><span /><span /> <span /><span /><span />
                </div>
                <div className="corner-elements">
                  <span /><span /><span /><span />
                </div>
                <div className="scan-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}
  
  
const StyledWrapper = styled.div`
.container {
  position: relative;
  width: 400px;
  height: 530px;
  transition: 200ms;
  will-change: transform, box-shadow;
  animation: ${floatAnimation} 4s ease-in-out infinite;
  filter: drop-shadow(15px 15px 0px rgba(92, 103, 255, 0.3));
   display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

/* Añadir sombra más pronunciada */
#cardPerfil {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.4),
    0 5px 15px rgba(0, 0, 0, 0.2);
     width: 350px; /* Ancho fijo para pantallas grandes */
}

.glass-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg, 
    rgba(26, 26, 26, 0.6) 0%, 
    rgba(38, 38, 38, 0.5) 100%
  );
  backdrop-filter: blur(8px); /* Aumentar el blur para mayor efecto de vidrio */
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.15); /* Borde más visible */
  box-shadow:
    inset 0 0 20px rgba(255, 255, 255, 0.1),
    inset 0 0 30px rgba(255, 255, 255, 0.05);
}
    /* Contenedor de la imagen - ajustado para imagen más grande */
    .image-wrapper {
      position: absolute;
      width: 135%;  /* Más ancho que el contenedor */
      left: -13.3%;    /* Centrado con margen negativo */
      height: 500px; /* Más alta */
      bottom: 0;    /* Pegada al fondo */
      display: flex;
      justify-content: center;
      align-items: flex-end;
      z-index: 1;
      overflow: hidden; /* Para que no se salga de la tarjeta */
    }
  
    .profile-image {
      width: 90%;    /* Más ancha */
      height: 100%;   /* Ocupa toda la altura del contenedor */
      object-fit: contain;
      object-position: bottom;
      filter: 
        drop-shadow(0 0 10px rgba(92, 103, 255, 0.7))
        brightness(1.1);
      opacity: 0.9;
      transition: all 0.3s ease;
      transform-origin: bottom center; /* Para que el hover scale funcione mejor */
    }
  
    /* Resto del CSS se mantiene igual... */
    .card-content {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 30px;
      z-index: 2;
    }
  
  
  
    .highlight {
      color: #00ffaa;
      margin-left: 5px;
      background: linear-gradient(90deg, #5c67ff, #2f81f7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
    }
  
    .tracker:hover ~ #cardPerfil .profile-image {
      opacity: 0.7;
 
    }
  
    .tracker:hover ~ #cardPerfil .title {
      opacity: 1;
      transform: translateY(0);
    }
  
    .tracker:hover ~ #cardPerfil .name-container {
      display:none;
    }
  
    /* Resto de tus efectos (glare, particles, etc.) */
    .cardPerfil-glare {
  opacity: 0.1;
  animation: glare 3s ease-in-out infinite;
}

    
  .glowing-elements {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .glow-1,
  .glow-2,
  .glow-3 {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      rgba(0, 255, 170, 0.3) 0%,
      rgba(0, 255, 170, 0) 70%
    );
    filter: blur(15px);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .glow-1 {
    top: -20px;
    left: -20px;
  }
  .glow-2 {
    top: 50%;
    right: -30px;
    transform: translateY(-50%);
  }
  .glow-3 {
    bottom: -20px;
    left: 30%;
  }

  .cardPerfil-particles span {
    position: absolute;
    width: 3px;
    height: 3px;
    background: #00ffaa;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  /* Hover effects */
  .tracker:hover ~ #cardPerfil .title {
    opacity: 1;
    transform: translateY(300px);
  }

  .tracker:hover ~ #cardPerfil .glowing-elements div {
    opacity: 1;
  }

  .tracker:hover ~ #cardPerfil .cardPerfil-particles span {
    animation: particleFloat 2s infinite;
  }

  @keyframes particleFloat {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(calc(var(--x, 0) * 30px), calc(var(--y, 0) * 30px));
      opacity: 0;
    }
  }

  /* Particle positions */
  .cardPerfil-particles span:nth-child(1) {
    --x: 1;
    --y: -1;
    top: 40%;
    left: 20%;
    animation-delay: 0s;
  }
  .cardPerfil-particles span:nth-child(2) {
    --x: -1;
    --y: -1;
    top: 60%;
    right: 20%;
    animation-delay: 0.2s;
  }
  .cardPerfil-particles span:nth-child(3) {
    --x: 0.5;
    --y: 1;
    top: 20%;
    left: 40%;
    animation-delay: 0.4s;
  }
  .cardPerfil-particles span:nth-child(4) {
    --x: -0.5;
    --y: 1;
    top: 80%;
    right: 40%;
    animation-delay: 0.5s;
  }
  .cardPerfil-particles span:nth-child(5) {
    --x: 1;
    --y: 0.5;
    top: 30%;
    left: 60%;
    animation-delay: 0.6s;
  }
  .cardPerfil-particles span:nth-child(6) {
    --x: -1;
    --y: 0.5;
    top: 70%;
    right: 60%;
    animation-delay: 0.8s;
  }

  #cardPerfil::before {
    content: "";
    background: radial-gradient(
      circle at center,
      rgba(0, 255, 170, 0.1) 0%,
      rgba(0, 162, 255, 0.05) 50%,
      transparent 100%
    );
    filter: blur(20px);
    opacity: 0;
    width: 150%;
    height: 150%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
  }

  .tracker:hover ~ #cardPerfil::before {
    opacity: 1;
  }

  .tracker {
    position: absolute;
    z-index: 200;
    width: 100%;
    height: 100%;
  }

  .tracker:hover {
    cursor: pointer;
  }

  .tracker:hover ~ #cardPerfil #prompt {
    opacity: 0;
  }

  .tracker:hover ~ #cardPerfil {
    transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
    filter: brightness(1.1);
  }

  .container:hover #cardPerfil::before {
    transition: 200ms;
    content: "";
    opacity: 80%;
  }

  .canvas {
    perspective: 800px;
    inset: 0;
    z-index: 200;
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "tr-1 tr-2 tr-3 tr-4 tr-5"
      "tr-6 tr-7 tr-8 tr-9 tr-10"
      "tr-11 tr-12 tr-13 tr-14 tr-15"
      "tr-16 tr-17 tr-18 tr-19 tr-20"
      "tr-21 tr-22 tr-23 tr-24 tr-25";
  }

  .tr-1 {
    grid-area: tr-1;
  }

  .tr-2 {
    grid-area: tr-2;
  }

  .tr-3 {
    grid-area: tr-3;
  }

  .tr-4 {
    grid-area: tr-4;
  }

  .tr-5 {
    grid-area: tr-5;
  }

  .tr-6 {
    grid-area: tr-6;
  }

  .tr-7 {
    grid-area: tr-7;
  }

  .tr-8 {
    grid-area: tr-8;
  }

  .tr-9 {
    grid-area: tr-9;
  }

  .tr-10 {
    grid-area: tr-10;
  }

  .tr-11 {
    grid-area: tr-11;
  }

  .tr-12 {
    grid-area: tr-12;
  }

  .tr-13 {
    grid-area: tr-13;
  }

  .tr-14 {
    grid-area: tr-14;
  }

  .tr-15 {
    grid-area: tr-15;
  }

  .tr-16 {
    grid-area: tr-16;
  }

  .tr-17 {
    grid-area: tr-17;
  }

  .tr-18 {
    grid-area: tr-18;
  }

  .tr-19 {
    grid-area: tr-19;
  }

  .tr-20 {
    grid-area: tr-20;
  }

  .tr-21 {
    grid-area: tr-21;
  }

  .tr-22 {
    grid-area: tr-22;
  }

  .tr-23 {
    grid-area: tr-23;
  }

  .tr-24 {
    grid-area: tr-24;
  }

  .tr-25 {
    grid-area: tr-25;
  }

  .tr-1:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-2:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-3:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-4:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-5:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-6:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-7:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-8:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-9:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-10:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-11:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-12:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-13:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-14:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-15:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-16:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-17:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-18:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-19:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-20:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-21:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-22:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-23:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-24:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-25:hover ~ #cardPerfil {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(10deg) rotateZ(0deg);
  }

  .noselect {
    -webkit-touch-callout: none;
    /* iOS Safari */
    -webkit-user-select: none;
    /* Safari */
    /* Konqueror HTML */
    -moz-user-select: none;
    /* Old versions of Firefox */
    -ms-user-select: none;
    /* Internet Explorer/Edge */
    user-select: none;
    /* Non-prefixed version, currently
  									supported by Chrome, Edge, Opera and Firefox */
  }

  .cardPerfil-glare {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      125deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.05) 45%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.05) 55%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0;
    transition: opacity 300ms;
  }

  .cyber-lines span {
    position: absolute;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(92, 103, 255, 0.2),
      transparent
    );
  }

  .cyber-lines span:nth-child(1) {
    top: 20%;
    left: 0;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: left;
    animation: lineGrow 3s linear infinite;
  }

  .cyber-lines span:nth-child(2) {
    top: 40%;
    right: 0;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: right;
    animation: lineGrow 3s linear infinite 1s;
  }

  .cyber-lines span:nth-child(3) {
    top: 60%;
    left: 0;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: left;
    animation: lineGrow 3s linear infinite 2s;
  }

  .cyber-lines span:nth-child(4) {
    top: 80%;
    right: 0;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: right;
    animation: lineGrow 3s linear infinite 1.5s;
  }

  .corner-elements span {
    position: absolute;
    width: 15px;
    height: 15px;
    border: 2px solid rgba(92, 103, 255, 0.3);
  }

  .corner-elements span:nth-child(1) {
    top: 10px;
    left: 10px;
    border-right: 0;
    border-bottom: 0;
  }

  .corner-elements span:nth-child(2) {
    top: 10px;
    right: 10px;
    border-left: 0;
    border-bottom: 0;
  }

  .corner-elements span:nth-child(3) {
    bottom: 10px;
    left: 10px;
    border-right: 0;
    border-top: 0;
  }

  .corner-elements span:nth-child(4) {
    bottom: 10px;
    right: 10px;
    border-left: 0;
    border-top: 0;
  }

  .scan-line {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(92, 103, 255, 0.1),
      transparent
    );
    transform: translateY(-100%);
    animation: scanMove 2s linear infinite;
  }

  @keyframes lineGrow {
    0% {
      transform: scaleX(0);
      opacity: 0;
    }
    50% {
      transform: scaleX(1);
      opacity: 1;
    }
    100% {
      transform: scaleX(0);
      opacity: 0;
    }
  }

  @keyframes scanMove {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  /* Modyfikacja istniejących styli */
  #cardPerfil:hover .cardPerfil-glare {
    opacity: 1;
  }

  .corner-elements span {
    transition: all 0.3s ease;
  }

  #cardPerfil:hover .corner-elements span {
    border-color: rgba(92, 103, 255, 0.8);
    box-shadow: 0 0 10px rgba(92, 103, 255, 0.5);
  }/* Añadir efecto de reflejo en la parte inferior */
  .glass-container::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    height: 20px;
    background: radial-gradient(ellipse at center, 
      rgba(255,255,255,0.15) 0%, 
      rgba(255,255,255,0) 70%);
    border-radius: 50%;
    filter: blur(5px);
    opacity: 0.7;
    z-index: -1;
  }

  /* Añadir sombra ambiental */
  .container::before {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 20px;
    right: 20px;
    height: 30px;
    background: rgba(92, 103, 255, 0.1);
    border-radius: 50%;
    filter: blur(15px);
    z-index: -1;
    animation: ${floatAnimation} 4s ease-in-out infinite;
    animation-delay: 0.2s;
  }

  
`;

export default CardPerfil;
