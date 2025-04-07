import React from 'react'
import { CardProjects } from '../../Components'

function Projects() {
  return (
    <section id="inicio" className="vh-100 d-flex justify-content-center align-items-center">
      <CardProjects
        title="Mi Proyecto React"
        description="Aplicación web construida con React y Node.js para gestión de tareas con autenticación de usuarios."
        technologies={["html5", "css3", "javascript", "react"]}
        githubUrl="https://github.com/tu-usuario/tu-repo"
        deployUrl="https://tu-sitio.com"
      />
    </section>
  )
}

export default Projects