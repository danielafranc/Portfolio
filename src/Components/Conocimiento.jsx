import React from 'react';
import data from "./data";

function Conocimiento() {
    
    return (
        <>
        {/* CARDS MAP */}
        <div className=''>
        <div>
            <h1 className='text-slate-900 font-semibold'> I'll shape your idea in a <span className='text-violet-400'>spectacular website</span> </h1>
        </div>
        <div className='flex justify-between max-w-[1150px] my-8 mx-auto ease-out'>
        {data.map((item) => (
            <div className='max-w-[350px] bg-white p-8 my-0 mx-2 rounded-2xl flex flex-col  w-[350px] h-auto hover:shadow-2xl hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-violet-800/75 '>
                <img src={item.img} alt={item.img}  className='w-[100px] h-[100px] mt-1 mb-4 flex justify-center items-center m-auto' />
                <h1 className='text-2xl font-bold text-black m-3'>{item.title}</h1>
                <p className='m-3 text-slate-800/60 font-[poppins] text-lg font-semibold'>{item.desc}</p>
                {/* <ul className='font-[poppins] text-s text-slate-600 '>
                    <li key={item.skill1}>{item.skill1}</li> 
                    <li key={item.skill2}>{item.skill2}</li> 
                    <li key={item.skill3}>{item.skill3}</li>
                    <li key={item.skill4}>{item.skill4}</li>  
                    <li key={item.skill5}>{item.skill5}</li>   
                    <li key={item.skill6}>{item.skill6}</li>  
                    </ul> */}
            </div>
           ))}
        </div>
        
        </div>
        </>
    );
}

export default Conocimiento;