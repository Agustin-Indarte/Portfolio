import React from 'react'
import { FormContact, InfoDerecha, InfoIzquierda } from '../../Components'

function Contact() {
  return (
    <section className='vh-100 d-flex justify-content-center mt-5'>
      <div className="me-5">
        <InfoIzquierda />
      </div>

      <FormContact />

      <div className="ms-5">
        <InfoDerecha />
      </div>


    </section>
  )
}

export default Contact