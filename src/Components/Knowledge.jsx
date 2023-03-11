import React from 'react';
import data from "../data/data";

function Conocimiento() {
    
    return (
        <>
        {/* CARDS MAP */}
        <section name='conocimiento' className='max-w-[1700px] pt-[170px] px-4 m-auto'>
        <div className=''>
            <h1 className='flex justify-center font-bold text-black font-[poppins] pb-3'>Knowledge</h1>
            <h2 className='flex justify-center text-slate-900 font-semibold font-[poppins] m-auto'> I'll shape your idea in a  <span className='text-violet-400 ml-1'>spectacular website</span> </h2>
        </div>
        <div className='flex  flex-col items-center lg:flex-row my-8 mx-4 ease-out p-8'>
        {data.map((item) => (
            <div className='bg-white p-8 m-auto  flex flex-col lg:items-center justify-center w-[350px] h-[400px] rounded-lg sm:mb-4 shadow-lg lg:gap-[25px]'>
                <img src={item.img} alt={item.img}  className='w-[100px] h-[100px] mt-1 mb-4 flex justify-center items-center m-auto' />
                <h1 className='text-2xl font-bold text-black m-3'>{item.title}</h1>
                <p className='m-3 text-slate-800/60 font-[poppins] text-lg font-semibold'>{item.desc}</p>
            </div>
           ))}
        </div>

       
       
        
        
        </section>
        </>
    );
}

export default Conocimiento;