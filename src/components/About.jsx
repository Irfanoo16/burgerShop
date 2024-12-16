import React from 'react';
import { about } from '../Data';

//image:
import AboutImg from '../asstes/images/section-two.jpg';

export default function About() {
    return (
        <div className='flex flex-col md:flex-row justify-center  mt-20 pt-10 max-w-6xl mx-auto px-5' id='about'>
            <img alt='' src={AboutImg} className='p-5 max-w-96 object-contain  pb-10 ' />
            <div className='p-5 flex flex-col items-center max-w-96 ' >
                <h1 className='capitalize mb-7 text-3xl'>{about.title}</h1>
                <h5 className='uppercase mb-5'>{about.subtitle}</h5>
                <p className='mb-5  '>{about.paraOne}
                    {about.highlight} <span className='bg-gray-100 px-1.5 py-1'>seasonal</span>  ingredients.</p>
                <p className='text-gray-600'>{about.paraTwo}</p>
            </div>
        </div>
    )
}
