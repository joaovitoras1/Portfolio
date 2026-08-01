import './App.css'
import Menu from './components/Nav-bar/Menu.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Technologies from './components/Technologies/Technologies.jsx'
import Projects from './components/Projects/Projects.jsx'

function App() {
  return (
    <div className="bg-[url('/bg-mobile.jpg')] md:bg-[url('/bg-desktop.jpg')] bg-cover bg-center w-screen h-screen">
      <Menu />
      <div>
        <Hero />
        <About />
        <Technologies />
        <Projects />
      </div>
    </div>
  )
}

export default App
