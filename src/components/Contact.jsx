import React from 'react'
import { contact } from '../Data'

export default function Contact() {
    return (
        <div id='contact' className='mx-7 flex flex-col justify-center px-5 pb-5 max-w-6xl md:mx-80'>
            <h1 className='text-3xl mb-10'>{contact.title}</h1>
            <p className='mb-5 text-base'>{contact.paraOne}</p>
            <h4 className='text-custom-gray-blue font-bold mb-5'>{contact.subHeading}</h4>
            <p className='text-base'>{contact.paraTwo}</p>
            <form className='mt-5 flex flex-col justify-start'>
                <input className='mb-7 p-5 border-b  text-black ' type='name' placeholder='Name' required='number' />
                <input className='mb-7 p-5 border-b' type='number' placeholder='How Many People' required='number' />
                <input className='mb-7 p-5 border-b' type='datetime-local' placeholder='Date and time' required name='date' value='2024-09-07T12:00' />
                <input className='mb-7 p-5 border-b' type='text' placeholder='Message / Special requirements' required name='text' />
                <button className='duration-300 uppercase bg-gray-100 py-2 px-3 w-40 hover:bg-zinc-400 text-black  '>send message</button>
            </form>
        </div>
    )
}
