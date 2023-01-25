import React from 'react';
import data from "./data";

function Conocimiento() {
    
    return (
        <>
        {/* CARDS MAP */}
        <section className='max-w-[1560px] py-[100px] px-4 m-auto'>
        <div>
            <h1 className='font-bold'>Knowledge</h1>
            <h2 className='text-slate-900 font-semibold'> I'll shape your idea in a <span className='text-violet-400'>spectacular website</span> </h2>
        </div>
        <div className='flex justify-between my-8 mx-auto ease-out p-8 md:flex-row'>
        {data.map((item) => (
            <div className='bg-white p-8 my-0 mx-2 flex flex-col  w-[350px] h-auto border-[6px] border-slate-100 rounded-lg'>
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