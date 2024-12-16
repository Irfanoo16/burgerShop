import React from 'react';

export default function Header() {
    return (
        <div className='fixed left-0 right-0 bg-white text-black flex justify-between p-3  tracking-widest shadow-xl z-50'>
            < a href='#home' className='px-5 hidden  md:block   hover:bg-zinc-400 text-black duration-300 ' > Gourmet au Catering</a >
            <div className='flex list-none cursor-pointer'>
                <a href='#home' className='px-5 ' ><li className='md:hidden  hover:bg-zinc-400 text-black '>Home</li></a>
                <a href='#about' className='px-5 hover:bg-zinc-400 text-black duration-300 '  >About<li className=' duration-300'></li></a>
                <a href='#menu' className='px-5'><li className='  hover:bg-zinc-400 text-black duration-300'>Menu</li> </a>
                <a href='#contact' className='px-5'><li className='  hover:bg-zinc-400 text-black duration-300'>Contact</li> </a>
            </div >
        </div >
    )
}
