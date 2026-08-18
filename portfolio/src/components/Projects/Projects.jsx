import { projects } from '../../data/projects.js'
import ProjectCard from '../Projects/ProjectCard/ProjectCard'

function Projects() {
  return (
    <div>
      <h2>Meu trabalho</h2>
      <p>Veja meus principais projetos</p>
      <div>
        {projects.map((projeto, index) => (
          <ProjectCard projectData={projeto} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Projects