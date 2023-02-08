import React from 'react';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



function Navbar(props) {
  const name = "<DANIELA/>";
    return (
        <div className='flex justify-between items-center w-[100%] fixed bg-black opacity-90 h-[60px] px-6'>
        <h1 className='text-center font-bold text-3xl text-white font-[poppins]'>{name}</h1>
        <nav className='' >
            <ul className='list-none flex items-center font-[poppins]'>
            <li className='mr-4 font-normal'><Link active="active" to="conocimiento" smooth={true} duration={500} className='hover:ease-in-out text-white'>KNOWLEDGE</Link></li>
            <li className='mr-4 font-normal'><Link active="active" to="portfolio" smooth={true} duration={500} className='hover:ease-in-out text-white'>PORTFOLIO</Link></li>
            <li className='mr-4 font-normal'><Link active="active" to="contact" smooth={true} duration={500} className='hover:ease-in-out text-white'>CONTACT</Link></li>
            </ul>
        </nav>
    </div>
    );
}

export default Navbar;