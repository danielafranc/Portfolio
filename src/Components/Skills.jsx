import React from 'react';
import { datadesc } from '../data/dataDesc';
import {classnames} from 'tailwindcss-classnames';

const DescriptionCards = () => {
const borderStyle = classnames('bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500')
    return (
        <div>
            <div  className='max-w-[1700px] m-[20px]'>
            <div>
            {datadesc.map(item => (
                <div className='border-4 p-8 mb-3 rounded-xl px-4  border-slate-100'>
                <p className='text-center font-bold p-1 text-[30px] bg-gradient-to-br from-slate-900 to-gray-500 bg-clip-text text-transparent'>{item.skill}</p>
                <p className='mt-3 text-lg font-medium '>{item.desc}</p>
                </div>
            ))}   
            </div> 
        </div>
          

        </div>
    );
};

export default DescriptionCards;