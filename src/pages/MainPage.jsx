import React from 'react';
import Knowledge from '../Components/Knowledge';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import ProjectCards from '../Components/ProjectCards';
import SobreMi from '../Components/SobreMi';
import fondo from '../Components/img/fondo.jpg';
import Skills from '../Components/Languages';
import Languages from '../Components/Languages';


const MainPage = () => {
    return (
        <div>
           <div id="bgImg" style={{ backgroundImage: `url(${fondo})`}} className="bg-[100%] bg-cover">
      <div id='inicio'>
            <Navbar/>
            {/* Presentación */}
            <div className='max-w-[1100px] min-w-[320px] h-[100vh] m-auto flex flex-col items-center justify-center'> {/*  // PRESENTACIÓN// */}
            <h2 className='text-[55px] mb-6 text-left leading-none text-white font-bold font-[poppins]'>turning ideas into real life <span id='css-selector'>websites</span> is my calling.</h2>
            <button className='bg-transparent border-2 border-white rounded-3xl hover:ease-in uppercase hover:text-fuchsia-100 text-white hover:shadow-lg hover:shadow-indigo-500/40 '><a href="#portfolio">Take a look</a></button>
            </div> 
            </div>
      </div>
          <SobreMi/>
          <Knowledge/>
          <Skills/>
          <ProjectCards/>
          <Footer/> 
        </div>
    );
};

export default MainPage;