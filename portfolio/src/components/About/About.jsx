function About() {
    return (
        <div className="p-10 place-items-center">
            <h2 className="pb-5 text-[20px] text-center">Sobre Mim</h2>
            <p>Olá, me chamo João Vitor, estudante autodidata de desenvolvimento web front-end. Aqui irei mostrar minhas habilidades e projetos práticos que fiz durante minha jornada de aprendizado.</p>
            <ul className="flex flex-col gap-2 p-5 list-disc">
                <li>Habilidades em HTML, CSS e Javascript, com foco em criar designs responsivos e acessíveis.</li>
                <li>Proficiente no uso de frameworks modernos de front-end, como o React e o TailwindCSS, utilizados para construir e estilizar interfaces de usuário dinâmicas e interativas</li>
                <li>Sempre em busca de conhecimento e habilidades que possam ser úteis para o campo de desenvolvimento web que está em constante evolução.</li>
            </ul>
        </div>
    )
}

export default About