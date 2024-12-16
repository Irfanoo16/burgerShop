import React from 'react';

//images:
import Burger from '../asstes/images/section-one.jpg';

export default function Hero() {
    return (
        <div id='home' className='flex justify-center '>
            <img alt='' src={Burger} className='lg:align-middle max-w-full h-auto mt-14 md:mt-1' />
        </div>
    )
}
