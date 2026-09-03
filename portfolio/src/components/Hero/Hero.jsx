import foto from '../../assets/foto.jpg'
import linkedin from '../../assets/icons/LinkedIn.svg'
import github from '../../assets/icons/GitHub.svg'

function Hero() {
    return (
        <div className="flex flex-col gap-1 p-2  items-center leading-none">
            <img src={foto} alt="foto-de-perfil-utilizando-camisa-social-branca" className="size-30 rounded-[50%] mt-10 mb-5" />

            <nav aria-label="Links de contato" className="pb-8">
                <ul className="flex flex-row gap-3">
                    <li>
                        <a href="www.linkedin.com/in/joaovitor-dev0" aria-label="LinkedIn" ><img src={linkedin} alt="Perfil do LinkedIn" className="size-7 transition delay-100 duration-200 ease-in-out hover:scale-120" /></a>
                    </li>
                    <li>
                        <a href="https://github.com/joaovitoras1" aria-label="GitHub" ><img src={github} alt="Perfil do GitHub" className="size-7 transition delay-100 duration-200 ease-in-out hover:scale-120" /></a>
                    </li>
                </ul>
            </nav>

            <p className="text-[14px] pb-2 font-jetbrains-mono text-(--white)">Hello World! Meu nome é <span className="italic text-(--light-blue)" >&lt;João Vitor/&gt;</span> e sou</p>
            <h1 className="text-[30px] font-bitcount-prop-single text-(--lilac)">Desenvolvedor Front-end</h1>
        </div>
    )
}

export default Hero