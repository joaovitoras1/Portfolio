import { icons } from '../../data/technologies.js'

function Technologies() {
    return (
        <div className="flex flex-col items-center">
            <h2 className="pb-5 text-[20px] font-open-sans">Tecnologias</h2>
            <div className="p-5 flex flex-wrap gap-5 md:flex-nowrap flex-row justify-center">
                {icons.map((item, index) => (
                    <img src={item.icone} alt={item.nome} key={index} className="size-10 animate-float" style={{animationDelay: index % 2 === 0 ? '0s' : '1.5s'}} />
                ))}
            </div>
        </div>
    )
}

export default Technologies