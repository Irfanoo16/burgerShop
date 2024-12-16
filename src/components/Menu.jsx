import React from 'react';

//image:
import menuImg from '../asstes/images/section-three.jpg';
import { menu } from '../Data';


export default function Menu() {
    return (
        <div id='menu' className='flex flex-col md:flex-row justify-center md max-w-5xl mx-auto py-16 px-5'>
            <div className='py-3 px-6'  >
                <h1 className='capitalize my-7 mb-12 text-3xl text-center'>{menu.title}</h1>
                <h4 className='uppercase my-5 text-lg'>{menu.listOneTitle}</h4>
                <p className='text-gray-600 '>{menu.listOne}</p>
                <h4 className='uppercase my-5 text-lg'>{menu.listTwoTitle}</h4>
                <p className='text-gray-600'>{menu.listTwo}</p>
                <h4 className='uppercase my-5 text-lg'>{menu.listThreeTitle}</h4>
                <p className='text-gray-600'>{menu.listThree}</p>
                <h4 className='uppercase my-5 text-lg'>{menu.listFourTitle}</h4>
                <p className='text-gray-600'>{menu.listFour}</p>
                <h4 className='uppercase my-5 text-lg'>{menu.listFiveTitle}</h4>
                <p className='text-gray-600'>{menu.listFive}</p>
            </div>
            <div className='py-3 px-6'>
                <img src={menuImg} alt="" className='max-w-80' />
            </div>
        </div>
    )
}
