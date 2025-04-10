import React from 'react';
import styled from 'styled-components';

const InfoDerecha = () => {
  return (
    <StyledWrapper>
      <section className="container">
  <div className="card-container">
    <div className="card-content">
      <div className="card-title">
        <span className="title">Coorporativos</span>
      </div>
      <div className="card-body">
        <span className="title">"Soluciones digitales para potenciar tu marca y tu negocio."</span>
      </div>
      <div className="card-footer">
        <span className="title">¡Crecemos juntos!</span>
      </div>
    </div>
  </div>
</section>

    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  

  .container {
  margin-top:170px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: italic;
    font-weight: bold;
    display: flex;
    aspect-ratio: 16 / 9;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1em;
    transform: scale(1.5) scaleX(-1); /* Ajusta el número según cuánto más grande lo querés */
  }

  /* Invertimos todo el layout de las tarjetas */
  .card-container {
    display: flex;
    gap: 1em;
    transform: scaleX(-1);
    
  }

  /* Revertimos el contenido individual */
   

  .svg-card svg {
    transform: scaleX(-1);
  }

  /* Opcional: asegurarte de que los íconos no se deformen */
  .svg-card svg {
    width: 2em;
    height: 2em;
    fill: currentColor;
  }

  .card-content {
    display: grid;
    align-content: center;
    justify-items: center;
    align-items: center;
    text-align: center;
    padding: 1em;
    grid-template-rows: 0.1fr 0.7fr 0.25fr;
    background-color: hsl(296, 59%, 10%);
    width: 10em;
    aspect-ratio: 9/16;
    -webkit-clip-path: polygon(0 0, 85% 0, 100% 14%, 100% 60%, 92% 65%, 93% 77%, 99% 80%, 99% 90%, 89% 100%, 0 100%);
    clip-path: polygon(0 0, 85% 0, 100% 14%, 100% 60%, 92% 65%, 93% 77%, 99% 80%, 99% 90%, 89% 100%, 0 100%);
  }

  .card-content::before {
    content: "";
    position: absolute;
    width: 250%;
    aspect-ratio: 1/1;
    transform-origin: center;
    background: linear-gradient(to bottom, transparent, transparent, #66e0ff, #66e0ff, #e366ff, #e366ff, transparent, transparent), linear-gradient(to left, transparent, transparent, #66e0ff, #66e0ff, #e366ff, #e366ff, transparent, transparent);
    animation: rotate 5s infinite linear;
  }

  .card-content::after {
    content: "";
    position: absolute;
    top: 1%;
    left: 1%;
    width: 98%;
    height: 98%;
    background: repeating-linear-gradient(to bottom, transparent 0%, rgba(64, 144, 181, 0.6) 1px, rgb(0, 0, 0) 3px, rgba(64, 144, 181, 0.3019607843) 5px, #153544 4px, transparent 0.5%), repeating-linear-gradient(to left, hsl(295, 60%, 12%) 100%, hsla(295, 60%, 12%, 0.99) 100%);
    box-shadow: inset 0px 0px 30px 40px hsl(296, 59%, 10%);
    -webkit-clip-path: polygon(0 0, 85% 0, 100% 14%, 100% 60%, 92% 65%, 93% 77%, 99% 80%, 99% 90%, 89% 100%, 0 100%);
    clip-path: polygon(0 0, 85% 0, 100% 14%, 100% 60%, 92% 65%, 93% 77%, 99% 80%, 99% 90%, 89% 100%, 0 100%);
    animation: backglitch 94ms linear infinite;
  }

  .card-title {
    z-index: 80;
    -webkit-clip-path: polygon(90% 0, 100% 100%, 0% 100%, 0% 0%);
    clip-path: polygon(90% 0, 100% 100%, 0% 100%, 0% 0%);
    background: linear-gradient(90deg, rgba(255, 254, 250, 0) 0%, rgba(102, 224, 255, 0.3) 27%, rgba(102, 224, 255, 0.3) 63%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, rgba(102, 224, 255, 0.3) 0%, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 96%, rgba(102, 224, 255, 0.3) 100%);
    width: 98%;
    font-size: 1.2em;
  }

  .title {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    z-index: 2;
    color: hsl(192, 100%, 88%);
    font-size: .8em;
    transition: all ease-in-out 2s linear;
    display: inline-block;
  }

  .card-body {
    padding-block: 1.5em;
    z-index: 80;
    display: flex;
    gap: 1.5em;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
  }

  .svg-card {
    text-decoration: none;
    color: hsl(192, 100%, 88%);
    background: linear-gradient(90deg, transparent 0%, rgba(102, 224, 255, 0.2) 27%, rgba(102, 224, 255, 0.2) 63%, transparent 100%);
    fill: currentColor;
    width: 2em;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
  }


  .svg-card:hover {
    cursor: pointer;
    color: hsl(192, 100%, 100%);
  }

 

  @keyframes backglitch {
    0% {
      box-shadow: inset 0px 20px 30px 40px hsl(296, 59%, 10%);
    }

    50% {
      box-shadow: inset 0px -20px 30px 40px hsl(296, 59%, 10.2%);
    }

    to {
      box-shadow: inset 0px 20px 30px 40px hsl(296, 59%, 10%);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate(-50%, 20%);
    }

    50% {
      transform: rotate(180deg) translate(40%, 10%);
    }

    to {
      transform: rotate(360deg) translate(-50%, 20%);
    }
  }

  @keyframes blinkShadowsFilter {
    0% {
      filter: drop-shadow(46px 36px 28px rgba(64, 144, 181, 0.3411764706)) drop-shadow(-55px -40px 28px #9e30a9);
    }

    25% {
      filter: drop-shadow(46px -36px 24px rgba(64, 144, 181, 0.8980392157)) drop-shadow(-55px 40px 24px #9e30a9);
    }

    50% {
      filter: drop-shadow(46px 36px 30px rgba(64, 144, 181, 0.8980392157)) drop-shadow(-55px 40px 30px rgba(159, 48, 169, 0.2941176471));
    }

    75% {
      filter: drop-shadow(20px -18px 25px rgba(64, 144, 181, 0.8980392157)) drop-shadow(-20px 20px 25px rgba(159, 48, 169, 0.2941176471));
    }

    to {
      filter: drop-shadow(46px 36px 28px rgba(64, 144, 181, 0.3411764706)) drop-shadow(-55px -40px 28px #9e30a9);
    }
  }/*# sourceMappingURL=style.css.map */`;

export default InfoDerecha;
