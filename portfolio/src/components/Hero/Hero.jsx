import foto from '../../assets/foto.jpg'

function Hero() {
    return (
        <div className="flex flex-col gap-1 p-2  items-center leading-none">
            <img src={foto} alt="foto-de-perfil-utilizando-camisa-social-branca" className="size-30 rounded-[50%] mb-5 " />
            <p className="text-[16px]">Hello World! Meu nome é <span className="" >João Vitor</span> e sou</p>
            <h1 className="text-[38px]">Desenvolvedor Front-end</h1>
        </div>
    )
}

export default Hero