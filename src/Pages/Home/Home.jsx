import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { IconButton3D, CardPerfil, Title, EmailButton } from '../../Components';
import './Home.css';

function Home() {
  const githubSvg = (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
    >
      <defs>
        <linearGradient id="githubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00ffaa" />
          <stop offset="100%" stopColor="#00a2ff" />
        </linearGradient>
      </defs>
      <path
        fill="url(#githubGradient)"
        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 
        0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 
        1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 
        0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.403c1.02.005 
        2.045.137 3.003.403 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 
        1.233 3.22 0 4.61-2.803 5.625-5.475 5.92.43.37.823 1.096.823 2.21 
        0 1.595-.015 2.88-.015 3.27 0 .32.19.694.8.576C20.565 21.796 
        24 17.298 24 12c0-6.63-5.373-12-12-12z"
      />
    </svg>
  );

  const linkedinSvg = (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
    >
      <defs>
        <linearGradient id="linkedinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00ffaa" />
          <stop offset="100%" stopColor="#00a2ff" />
        </linearGradient>
      </defs>
      <path
        fill="url(#linkedinGradient)"
        d="M17.25 16.5h-1.92v-2.97c0-.71-.01-1.62-.99-1.62s-1.14.77-1.14 1.56v3.03H11.3V11h1.84v.75h.03c.26-.49.88-.99 1.8-.99 1.92 0 2.28 1.26 2.28 2.91v2.83zM7.98 10.2a1.11 1.11 0 1 1 0-2.22 1.11 1.11 0 0 1 0 2.22zM8.94 16.5H7.02V11h1.92v5.5z"
      />
    </svg>
  );

  const downloadSvg = (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
    >
      <defs>
        <stop offset="0%" stopColor="#00ffaa" />
        <stop offset="100%" stopColor="#00a2ff" />
      </defs>
      <path
        fill="url(#githubGradient)"
        d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM13 9V3.5L18.5 9H13zm-5 6h8v2H8v-2zm0-4h8v2H8v-2z"
      />
    </svg>
  );

  return (
    <section id="inicio" className="vh-100 d-flex justify-content-center">
    <Row className="col-12 col-lg-9 mt-5">
    <Col lg={6} className='d-flex flex-column'>
      <p className=' mt-4 Parrafo-Perfil'>¡Bienvenido a mi portfolio! Soy:</p>
      <h1 className='Titulos mb-4'>Agustin Indarte</h1>
      <div className="mb-2">
        <Title />
      </div>
      <p className='lead Parrafo-Perfil mb-4'>
        Tengo 22 años y me desempeño como auxiliar administrativo en el área de Tesorería, donde desarrollo un sistema web para la gestión de ingresos, egresos y saldos. <br />
        Me apasiona la programación, resolver problemas y utilizar la tecnología para mejorar procesos.
        Me destaco por mi capacidad de adaptación, creatividad, organización y liderazgo.
      </p>
      <div className="d-flex flex-column flex-lg-row gap-3">
  <div className="d-flex  flex-lg-row gap-3">
    <IconButton3D svg={githubSvg} url="https://github.com/Agustin-Indarte" title="GitHub" />
    <IconButton3D svg={linkedinSvg} url="https://www.linkedin.com/in/agustin-indarte/" title="LinkedIn" />
    <IconButton3D svg={downloadSvg} url="/CV_Agustin_Indarte.pdf" title="Descargar CV" />
  </div>
  <div className="d-flex justify-content-start">
    <EmailButton />
  </div>
</div>
    </Col>
    <Col lg={6} className='text-center'>
      <CardPerfil />
    </Col>
  </Row>
</section>
  );
}

export default Home;
