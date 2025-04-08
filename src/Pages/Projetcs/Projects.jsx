import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CardProjects } from '../../Components';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        {/* Título centrado */}
        <h2 className="floating-title Titulos text-center mb-5">Mis trabajos y proyectos</h2>

        {/* Contenedor de tarjetas */}
        <Row className="justify-content-center g-4">
          {/* Proyecto 1 */}
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
              <CardProjects
                title="Sistema AAEMM"
                details="Gestión de ingresos, egresos y saldos contables."
                description="Proyecto en desarrollo. Responsable del diseño y organización general, desarrollo del frontend y colaboración en las funciones lógicas para un sistema de gestión de tesorería que permite registrar, modificar y visualizar movimientos."
                technologies={["react", "javascript", "bootstrap", "figma"]}
                githubUrl=""
                deployUrl=""
                mediaUrl="https://github.com/Agustin-Indarte/Portfolio/releases/download/v1.0/SistemaAAEMM.mp4"
                mediaType="video"
                posterUrl="SistemaAAEMM-poster.png"
              />
            </Col>

          </Col>


          {/* Proyecto 2 */}
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <CardProjects
              title="Pochoclos"
              details="Web de películas con API, CRUD y base de datos."
              description="Proyecto donde diseñé en Figma, coordiné al equipo como Scrum Master y desarrollamos una web para buscar, destacar, agregar y mostrar películas con portadas y tráilers. Integra la API de TMDB y un CRUD personalizado."
              technologies={["react", "javascript", "firebase", "figma"]}
              githubUrl="https://github.com/Agustin-Indarte/Pochoclos"
              deployUrl="https://pochoclos.vercel.app/"
              mediaUrl="https://github.com/Agustin-Indarte/Portfolio/releases/download/v1.0/Pochoclos.mp4"
              mediaType="video"
              posterUrl="Pochoclos-poster.png"
            />

          </Col>

          {/* Proyecto 3 */}
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <CardProjects
              title="La Leñita"
              details="Web de gastronomía con reservas y galería."
              description="Proyecto de práctica basado en un restaurante real. La propuesta incluye funcionalidades como sistema de reservas online mediante email js, galería de imágenes y un menú. El diseño fue adaptado a la identidad visual."
              technologies={[ "react", "bootstrap","html5", "css3"]}
              githubUrl="https://github.com/Agustin-Indarte/Restaurante"
              deployUrl="https://la-lenita.vercel.app/"
              mediaUrl="LaLeñita-poster.png"
              mediaType="image"
            />
          </Col>

          {/* Proyecto 4 */}
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <CardProjects
              title="Adopta un michi"
              details="Página informativa para adoptar gatitos."
              description="Proyecto de aprendizaje centrado en la estructuración de páginas web. Presenta una propuesta sobre adopción de gatos, con navegación fluida, secciones informativas, formularios funcionales y diseño responsivo."
              technologies={["html5", "css3","bootstrap"]}
              githubUrl="https://github.com/Agustin-Indarte/Adopta_un_michi"
              deployUrl="https://adopta-michis.vercel.app/"
              mediaUrl="AdoptaMichi-poster.png"
              mediaType="image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;