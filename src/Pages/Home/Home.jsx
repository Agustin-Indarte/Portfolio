import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CardPerfil, Title } from '../../Components'
import './Home.css';

function Home() {
  return (
    <section id="inicio" className="vh-100 d-flex justify-content-center">
      <Row className="w-75 mt-5">
        <Col lg={6} className='d-flex flex-column mt-5'>
          <p className='fs-5 mb-3 mt-5 Parrafo-Perfil'>¡Bienvenido a mi portfolio! Soy:</p>
          <h1 className='MiNombre mb-4'>Agustin Indarte</h1>
          <div className="mb-4">
            <Title />
          </div>
          <p className='lead Parrafo-Perfil'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio voluptatibus laboriosam error. Dolor amet illum rem consequatur perspiciatis laudantium saepe libero sit at.</p>
          
        </Col>
        <Col lg={6} className='text-center'>
          <CardPerfil />
        </Col>
      </Row>
    </section>
  )
}

export default Home