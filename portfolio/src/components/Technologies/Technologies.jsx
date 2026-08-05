import './Technologies.css'
import htmlIcon from '../../assets/icons/HTML.svg'
import cssIcon from '../../assets/icons/CSS.svg'
import javascriptIcon from '../../assets/icons/JavaScript.svg'
import gitIcon from '../../assets/icons/Git.svg'
import reactIcon from '../../assets/icons/React.svg'
import tailwindIcon from '../../assets/icons/Tailwind.svg'

const icons = [
    { nome: "HTML", icone: htmlIcon },
    { nome: "CSS", icone: cssIcon },
    { nome: "JavaScript", icone: javascriptIcon },
    { nome: "Git", icone: gitIcon },
    { nome: "React", icone: reactIcon },
    { nome: "Tailwind", icone: tailwindIcon },
]

function Technologies() {
    return (
        <div className="flex flex-col items-center">
            <h2 className="pb-5 text-[20px] font-open-sans">Tecnologias</h2>
            <div className="p-5 flex flex-wrap gap-5 md:flex-nowrap flex-row justify-center">
                {icons.map((item, index) => (
                    <img src={item.icone} alt={item.nome} key={index} className="size-10" />
                ))}
            </div>
        </div>
    )
}

export default Technologies