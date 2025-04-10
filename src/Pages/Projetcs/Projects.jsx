import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CardProjects } from '../../Components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Projects.css';

function Projects() {
  
  const projects = [
    {
      title: "Sistema AAEMM",
      details: "Gestión de ingresos, egresos y saldos contables.",
      description: "Proyecto en desarrollo...",
      technologies: ["react", "javascript", "bootstrap", "figma"],
      githubUrl: "",
      deployUrl: "",
      mediaUrl: "https://github.com/Agustin-Indarte/Portfolio/releases/download/v1.0/SistemaAAEMM.mp4",
      mediaType: "video",
      posterUrl: "SistemaAAEMM-poster.png"
    },
    {
      title: "Pochoclos",
      details: "Web de películas con API, CRUD y base de datos.",
      description: "Proyecto donde diseñé en Figma...",
      technologies: ["react", "javascript", "firebase", "figma"],
      githubUrl: "https://github.com/Agustin-Indarte/Pochoclos",
      deployUrl: "https://pochoclos.vercel.app/",
      mediaUrl: "https://github.com/Agustin-Indarte/Portfolio/releases/download/v1.0/Pochoclos.mp4",
      mediaType: "video",
      posterUrl: "Pochoclos-poster.png"
    },
    {
      title: "La Leñita",
      details: "Web de gastronomía con reservas y galería.",
      description: "Proyecto de práctica basado en un restaurante real...",
      technologies: ["react", "bootstrap", "html5", "css3"],
      githubUrl: "https://github.com/Agustin-Indarte/Restaurante",
      deployUrl: "https://la-lenita.vercel.app/",
      mediaUrl: "LaLeñita-poster.png",
      mediaType: "image"
    },
    {
      title: "Adopta un michi",
      details: "Página informativa para adoptar gatitos.",
      description: "Proyecto de aprendizaje centrado en la estructuración...",
      technologies: ["html5", "css3", "bootstrap"],
      githubUrl: "https://github.com/Agustin-Indarte/Adopta_un_michi",
      deployUrl: "https://adopta-michis.vercel.app/",
      mediaUrl: "AdoptaMichi-poster.png",
      mediaType: "image"
    },
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <h2 className="floating-title Titulos text-center mb-5">Mis trabajos y proyectos</h2>

        {/* Slider solo en dispositivos chicos */}
        <div className="d-md-none position-relative">
  <Swiper
    spaceBetween={20}
    slidesPerView={1}
    pagination={{ clickable: true }}
    loop={true}
  >
    {projects.map((proj, index) => (
      <SwiperSlide key={index}>
        <CardProjects {...proj} />
      </SwiperSlide>
    ))}
  </Swiper>

  <div className="scroll-hint d-md-none">
    <span className="scroll-text">Deslizá</span>
    <div className="arrow">&#8594;</div>
  </div>
</div>

        {/* Grid en dispositivos medianos y grandes */}
        <Row className="justify-content-center g-4 d-none d-md-flex">
          {projects.map((proj, index) => (
            <Col key={index} md={6} lg={3} className="d-flex justify-content-center">
              <CardProjects {...proj} />
            </Col>
          ))}
        </Row>
      </Container>

    
    </section>
  );
}

export default Projects;
