import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Inicio from './Components/Inicio'
import Header from './Components/SobreMi'
import fondo from '../src/Components/img/fondo.jpg'
import SobreMi from './Components/SobreMi'
import Conocimiento from './Components/Conocimiento'
import './Components/gradient.css'
import ProjectCards from './Components/ProjectCards'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)
  const name = "<DANIELA/>";
  return (
    <div className="App">
      {/* inicio */}
      <div id="bgImg" style={{ backgroundImage: `url(${fondo})`}} className="bg-[100%] bg-cover">
      <div id='inicio'>
        {/* NavBar */}
             <div className='flex justify-between items-center w-[100%] fixed bg-black opacity-90 h-[60px]'>
                <h1 className='text-center font-bold text-3xl text-white font-[poppins]'>{name}</h1>
                <nav className='' >
                    <ul className='list-none flex items-center font-[poppins]'>
                    <li className='mr-4 font-normal'><a href="#inicio" className='hover:ease-in-out text-white hover:text-rose-700 duration-[.5s]'>MAIN</a></li>
                    <li className='mr-4 font-normal'><a href="#sobremi" className='hover:ease-in-out text-white hover:text-rose-700 duration-[.5s]'>ABOUT ME</a></li>
                    <li className='mr-4 font-normal'><a href="#conocimiento" className='hover:ease-in-out text-white hover:text-rose-700 duration-[.5s]'>KNOWLEDGE</a></li>
                    <li className='mr-4 font-normal'><a href="#portfolio" className='hover:ease-in-out text-white hover:text-rose-700 duration-[.5s]'>PORTFOLIO</a></li>
                    <li className='mr-4 font-normal'><a href="#contacta" className='hover:ease-in-out text-white hover:text-rose-700 duration-[.5s]'>CONTACT</a></li>
                    </ul>
                </nav>
            </div>
            
            <div className='max-w-[1100px] min-w-[320px] h-[100vh] m-auto flex flex-col items-center justify-center'> {/*  // PRESENTACIÓN// */}
            {/* <p className='text-normal text-white font-bold mb-5 uppercase tracking-[0.2em] '>Bienvenidos</p> */}
            <h2 className='text-[55px] mb-6 text-left ssm:leading-none sm:leading-none md:leading-none text-white font-bold font-[poppins]'>turning ideas into real life <span id='css-selector'>products</span> is my calling.</h2>
            {/* <p className='text-white font-[poppins] mb-5'>Desarrollar webpages con código se convirtió en mi pasión, satisfacer al cliente y al usuario mi trabajo favorito</p> */}
            <button className='bg-transparent border-2 border-white rounded-3xl hover:ease-in uppercase hover:text-fuchsia-100 text-white hover:shadow-lg hover:shadow-indigo-500/40 '><a href="#portfolio">Take a look</a></button>
            </div> 
            </div>
      </div>
      <SobreMi/>
          <Conocimiento/>
          <ProjectCards/>
          <Footer/>
    
    </div>
  )
}
// text-[60px] text-violet-700 md:mt-8 font-sans text-5xl

export default App
