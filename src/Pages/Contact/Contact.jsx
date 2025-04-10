import React from 'react'
import { FormContact, InfoDerecha, InfoIzquierda } from '../../Components'
import "./Contact.css"

function Contact() {
  return (
    <section className='vh-100 d-flex justify-content-center mt-5'>

<div className="me-5 floating d-none d-md-block">
  <InfoIzquierda />
</div>

<div className='floating'>
  <FormContact />
</div>

<div className="ms-5 floating d-none d-md-block">
  <InfoDerecha />
</div>

    </section>
  )
}

export default Contact