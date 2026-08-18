function ProjectCard({projectData}) {
    return (
        <div>
            <img src={projectData.image} alt={projectData.title} />
            <h3>{projectData.title}</h3>
            <p>{projectData.description}</p>
            <a href={projectData.link}>Acessar</a>
        </div>
    )
}

export default ProjectCard