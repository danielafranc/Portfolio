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
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <div id="bgImg" style={{ backgroundImage: `url(${fondo})`}} className="bg-[100%] bg-cover">
      <div id='inicio'>
            <Navbar/>
            {/* Presentación */}
            <div className='max-w-[1100px] min-w-[320px] h-[100vh] m-auto flex flex-col items-center justify-center'> {/*  // PRESENTACIÓN// */}
            <h2 className='text-[75px] mb-6 text-left ssm:leading-none sm:leading-none md:leading-none text-white font-bold font-[poppins]'>turning ideas into real life <span id='css-selector'>products</span> is my calling.</h2>
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
