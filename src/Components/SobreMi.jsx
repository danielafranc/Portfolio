import React from 'react';
import profilePic from './img/profilePic.jpg'

function SobreMi(props) {

    return (
        <>
            <div id='sobremi' className='max-w-[1700px] px-8 m-auto mt-[10%]'>
                <div className='flex  justify-between items-center'>
                <div className='max-w-[400px] mr-[80px]'>
                    <img src={profilePic} alt="" className='p-5 w-[100%] rounded-2xl bg-[#f3f3f3]'/>
                </div>
                <div>
                    <p className='text-[22px] uppercase underline decoration-[#d3d3d3] decoration-4 font-[poppins] text-slate-900'>About me</p>
                    <h2 className='text-2xl font-bold m-5 tracking-[2px] font-[poppins]'>Hello there! I am <span className='text-[60px] text-violet-700 md:mt-8  text-5xl font-[poppins]'>Daniela Franco</span></h2>
                    <h3 className='font-[poppins] font-bold text-lg'>Frontend Web Developer Junior</h3>
                    
                    <div className=''>
                    <p className='font-[poppins]'> I have developed my experience through the past 18+ months that I have been coding facing all types of challenges  and solving them, learning best practices to provide my best reflected on my code.</p>
                    <p className='font-[poppins]'>I am currently looking for my first job opportunity as a Frontend Web Developer to contribute my knowledge, transform it, and make it grow by creating solutions for people's problems</p>
                    </div>
                    
                    <button className='rounded-3xl border-3   mt-6 text-white hover:bg-transparent bg-purple-600 hover:text-purple-600 hover:border-purple-600'><a href="https://docs.google.com/document/d/1p9dKpnt9aN10ZGR5_6cSqgcNaIkqMdbhCO8s4SYHIk4/edit?usp=share_link" target="_blank">Watch my curriculum</a></button>
                </div>
                </div>
              
            </div>
            
{/*  */}
        </>
    );
}

export default SobreMi;