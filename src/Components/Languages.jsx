import React from 'react';
import usa  from './img/usa.png';
import portugal  from './img/portugal.jpeg';
import france from './img/france.jpeg';
import spain  from './img/spain.jpeg';

const DescriptionCards = () => {
    return (
        <div className='max-w-[1700px] pt-[100px] pb-[100px] px-4 m-auto' >
                <h1 className='font-[poppins] font-extrabold text-gray-900 text-[58px] '>Languages</h1>
                <h2 className='mt-5 text-xl inter tracking-wide font-[poppins]'>I am a self taught polygloth and I can speak:</h2>

                <div className='flex  flex-col items-center lg:flex-row justify-center gap-6 mt-5'>
                <div className="border shadow w-48 h-70 p-3 rounded">
                    <img src={spain} alt="English" />
                    <p className='font-bold text-2xl text-black'>Spanish</p>
                    <p className='font-medium mt-2'>Level</p>
                    <p className='font-bold text-slate-500 text-2xl'>Native</p>
                </div>
                <div className="border shadow w-48 h-70 p-3 rounded">
                    <img src={usa} alt="English" />
                    <p className='font-bold text-xl text-black'>English</p>
                    <p className='font-medium mt-2'>Level</p>
                    <p className='font-bold text-slate-500 text-2xl'>Advanced</p>
                </div>
                <div className="border shadow w-48 h-70 p-3 rounded">
                    <img src={portugal} alt="English" />
                    <p className='font-bold text-xl text-black'>Portuguese</p>
                    <p className='font-medium mt-2'>Level</p>
                    <p className='font-bold text-slate-500 text-2xl'>Intermediate</p>
                </div>
                <div className="border shadow w-48 h-70 p-3 rounded">
                    <img src={france} alt="English" />
                    <p className='font-bold text-xl text-black'>French</p>
                    <p className='font-medium mt-2'>Level</p>
                    <p className='font-bold text-slate-500 text-2xl'>Basic</p>
                </div>
                </div>
                

        </div>
    );
};

export default DescriptionCards;