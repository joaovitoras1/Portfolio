import foto from '../../assets/foto.jpg'

function Hero() {
    return (
        <div className="flex flex-col items-center">
            <img src={foto} alt="foto-de-perfil-utilizando-camisa-social-branca" />
            <p>Hello World! Meu nome é <span>João Vitor</span> e sou</p>
            <h1>Desenvolvedor Front-end</h1>
        </div>
    )
}

export default Hero