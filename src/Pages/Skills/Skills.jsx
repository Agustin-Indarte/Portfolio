import React from 'react'
import { Col, Row } from 'react-bootstrap'


function Skills() {
  return (
    <section id="inicio" className="vh-100 d-flex justify-content-center align-items-center">

        <Row className='w-100'>
          <Col lg={6} className='text-center'>
          <h2 className="floating-title Titulos text-center mb-5"> 
            Habilidades Técnicas</h2>
            
         
          
          </Col>
          <Col lg={6} className='text-center'>
          <h2 className="floating-title Titulos text-center mb-5">Habilidades Blandas</h2>
         
          
          </Col>
        </Row>
      
        
      </section>
  )
}

export default Skills