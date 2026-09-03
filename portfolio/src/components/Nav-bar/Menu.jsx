function Menu() {
    return (
        <div>
            <ul className="flex flex-row gap-3 pt-3 justify-center font-open-sans text-(--lavender-gray)">
                <li className="hover:text-(--white)"><a href="">Sobre Mim</a></li>
                <li className="hover:text-(--white)"><a href="">Tecnologias</a></li>
                <li className="hover:text-(--white)"><a href="">Projetos</a></li>
            </ul>
        </div>
    )
}

export default Menu