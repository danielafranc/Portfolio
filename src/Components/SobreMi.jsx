import React from 'react';
import profilePic from './img/profilePic.jpg'

function SobreMi(props) {

    return (
        <>
            <div id='sobremi' className=' min-w-[320px] flex  justify-between items-center pb-[100px] pt-[100px] px-8 mx-5'>
                <div className='max-w-[400px] mr-[80px]'>
                    <img src={profilePic} alt="" className='p-5 w-[100%] rounded-2xl bg-[#f3f3f3]'/>
                </div>
                <div>
                    <p className='text-[22px] uppercase underline decoration-[#d3d3d3] decoration-4 font-[poppins] text-slate-900'>Sobre Mi</p>
                    <h2 className='text-2xl font-bold m-5 tracking-[2px] font-[poppins]'>Hola! Soy <span className='text-[60px] text-violet-700 md:mt-8  text-5xl font-[poppins]'>Daniela Franco</span></h2>
                    <h3 className='font-[poppins] font-bold text-lg'>Desarrollador Web</h3>
                    <p className='font-[poppins]'>Políglota por pasión, amo poder conectar y ayudar a las personas de mi alrededor y proveerles soluciones a sus necesidades. Me metí en el mundo de la programación y me especifico en el Frontend development. Estoy buscando aprender día a día más para hacer mis proyectos más óptimos y fáciles de usar para el usuario</p>
                    <p className='font-[poppins]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore delectus eaque, autem numquam exercitationem ullam animi facilis suscipit doloribus voluptatibus sapiente</p>
                    <button className='rounded-3xl border-2   mt-6 text-white hover:bg-transparent bg-purple-600 hover:text-purple-600 hover:border-purple-600'><a href="">Descargar CV</a></button>
                </div>
            </div>
            

        </>
    );
}

export default SobreMi;