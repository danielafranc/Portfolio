import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



function Navbar(props) {
  const name = "<DANIELA/>";
    return (
        <div className='flex justify-between items-center w-[100%] fixed bg-black opacity-90 h-[60px] px-6'>
        <h1 className='text-center font-bold text-3xl text-white font-[poppins]'>{name}</h1>
        <nav className='' >
            <ul className='list-none flex items-center font-[poppins]'>
            <li className='mr-4 font-normal'><Link active="active" to="conocimiento" smooth={true} duration={500} className='hover:ease-in-out text-white hover:text-rose-700 duration-[.5s]'>KNOWLEDGE</Link></li>
            <li className='mr-4 font-normal'><a href="#portfolio" className='hover:ease-in-out text-white hover:text-rose-700 duration-[.5s]'>PORTFOLIO</a></li>
            <li className='mr-4 font-normal'><a href="#contacta" className='hover:ease-in-out text-white hover:text-rose-700 duration-[.5s]'>CONTACT</a></li>
            </ul>
        </nav>
    </div>
    );
}

export default Navbar;