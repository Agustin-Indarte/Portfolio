import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormContact = () => {
    const formRef = useRef();

    const initialValues = {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: '',
    };

    const validationSchema = Yup.object({
        nombre: Yup.string().required('El nombre es obligatorio'),
        email: Yup.string().email('Email inválido').required('El email es obligatorio'),
        asunto: Yup.string().required('El asunto es obligatorio'),
        mensaje: Yup.string().required('El mensaje es obligatorio'),
    });

    const onSubmit = (values, { resetForm }) => {
        emailjs.sendForm('service_xwyqphe', 'template_5iqasxk', formRef.current, 'TmbimF1gBOKCCqIGU')
            .then(() => {
              toast.success('Mensaje enviado correctamente 🚀');

                resetForm();
            })
            .catch((error) => {
                console.error('Error al enviar el mensaje:', error);
                toast.error('Ups... Hubo un error. Intentalo nuevamente 😢');

            });
    };

    return (
      <>
      <StyledWrapper>
      <div className="fc-form-card1 mt-4 mt-lg-5 mt-md-5">
                <div className="fc-form-card2">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {() => (
                            <Form ref={formRef} className="fc-form">
                                <div className="fc-form-header">
                                    <p className="fc-form-heading">Trabajos</p>
                                    <p className="fc-form-subtitle">¿Consultas, ideas o proyectos? <br/> Estoy para escucharte.</p>
                                </div>

                                <Row>
                                <Col lg={6} className="fc-nombre-col">
                                        <div className="fc-form-control">
                                            <Field name="nombre" type="text" className="fc-input" required />
                                            <label className="fc-label">Nombre</label>
                                            <ErrorMessage name="nombre" component="div" className="fc-error" />
                                        </div>
                                    </Col>

                                    <Col lg={6} className="fc-email-col">
                                        <div className="fc-form-control">
                                            <Field name="email" type="email" className="fc-input" required />
                                            <label className="fc-label">Email</label>
                                            <ErrorMessage name="email" component="div" className="fc-error" />
                                        </div>
                                    </Col>
                                </Row>

                                <div className="fc-form-control">
                                    <Field name="asunto" type="text" className="fc-input" required />
                                    <label className="fc-label">Asunto</label>
                                    <ErrorMessage name="asunto" component="div" className="fc-error" />
                                </div>

                                <div className="fc-form-control">
                                    <Field as="textarea" name="mensaje" rows={4} className="fc-input fc-textarea" required />
                                    <label className="fc-label">Mensaje</label>
                                    <ErrorMessage name="mensaje" component="div" className="fc-error" />
                                </div>

                                <button type="submit" className="fc-sendMessage-btn">Enviar</button>
                            </Form>
                        )}
                    </Formik>
                </div>
               
            </div>
            
        </StyledWrapper>
        
      </>
        
    );
};

const StyledWrapper = styled.div`
  .fc-form-card1 {
    background-image: linear-gradient(163deg, #64ffda 0%, #64ffda 100%);
    border-radius: 22px;
    padding: 4px;
    transition: all 0.3s;
    max-width: 600px;
    margin: auto;
  }


  .fc-form-card1:hover {
    box-shadow: 0px 0px 30px 5px rgba(100, 255, 218, 0.4);
  }

  .fc-form-card2 {
    background-color:rgb(15, 21, 29);
    border-radius: 20px;
    padding: 2rem;
    transition: all 0.2s;
  }

  .fc-form-card2:hover {
    transform: scale(0.99);
  }

  .fc-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .fc-form-header {
    text-align: center;
  }

  .fc-form-heading {
    font-size: 1.8rem;
    font-weight: bold;
    color: #64ffda;
    margin-bottom: 0.2rem;
  }

  .fc-form-subtitle {
    color: #a0a0a0;
    font-size: 0.95rem;
    margin: 0;
  }

  .fc-form-control {
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .fc-label {
    position: absolute;
    top: 50%;
    left: 14px;
    transform: translate(0%, -50%);
    font-size: 0.75em;
    user-select: none;
    pointer-events: none;
    color:rgb(0, 0, 0);
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .fc-input {
    width: 100%;
    background-color: rgb(255, 255, 255);
    border: none;
    outline: none;
    color:rgb(0, 0, 0);
    padding: 1rem;
    font-size: 0.9rem;
    border-radius: 10px;
    box-shadow:
      inset 2px 2px 5px rgba(0, 0, 0, 0.6),
      inset -2px -2px 5px rgba(255, 255, 255, 0.05);
    transition: box-shadow 0.3s ease;
    resize: none;
  }

  .fc-input:focus,
  .fc-input:valid {
    box-shadow:
      inset 3px 3px 6px rgba(0, 0, 0, 0.7),
      inset -3px -3px 6px rgba(255, 255, 255, 0.07);
  }

  .fc-input:focus + .fc-label,
  .fc-input:valid + .fc-label {
    transform: translate(-160%, -50%);
    color: #64ffda;
  }

  .fc-textarea {
    min-height: 120px;
    padding-top: 1.6rem;
  }

  .fc-textarea + .fc-label {
    top: 1.6rem;
    transform: translate(0%, 0%);
  }

  .fc-textarea:focus + .fc-label,
  .fc-textarea:valid + .fc-label {
    transform: translate(-160%, 0%);
    color: #64ffda;
  }

  .fc-sendMessage-btn {
    padding: 0.8rem 1rem;
    background-color: transparent;
    border: 1px solid #64ffda;
    border-radius: 10px;
    color: #64ffda;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 5px rgba(100, 255, 218, 0.2);
  }

  .fc-sendMessage-btn:hover {
    background-color: #64ffda;
    color: #0a0a0a;
    box-shadow: inset 2px 4px 8px rgba(0, 0, 0, 0.5);
    transform: scale(1.03);
  }

  @media (max-width: 576px) {
    .fc-form-card1 {
      margin-inline: 1rem;
    }
  }
.fc-nombre-col {
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    margin-bottom: 0; /* sin margen en desktop */
  }
}

.fc-email-col {
  margin-bottom: 0; /* nunca le pongas margen abajo */
}

@media (min-width: 576px) and (max-width: 991.98px) {
  .fc-form-card1 {
    max-width: 700px;
    padding: 6px;
  
  }

  .fc-form-card2 {
    padding: 3rem;
  }

  .fc-form-heading {
    font-size: 2.2rem;
  }

  .fc-form-subtitle {
    font-size: 1.1rem;
  }

  .fc-input {
    padding: 1.2rem;
    font-size: 1rem;
  }

  .fc-label {
    font-size: 0.85em;
  }

  .fc-textarea {
    min-height: 140px;
    padding-top: 1.8rem;
  }

  .fc-sendMessage-btn {
    padding: 1rem 1.2rem;
    font-size: 1.1rem;
  }
}
`;

export default FormContact;
