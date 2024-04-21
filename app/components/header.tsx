import React from 'react'

import Logo from './logo'
import Footer from './footer'
import { TiThMenu } from "react-icons/ti";

export default function header(){
    
    return (
        <header className='fixed h-screen flex flex-col items-center justify-between p-2 gap-2 bg-slate-950 shadow-2xl'>

           {/* <div className='text-teal-300 text-4xl absolute visible md:hidden'>
            <TiThMenu />
           </div> */}

            <div className='text-teal-300 md:visible'>
                <Logo />
            </div>
           <ul className=''>
                <li className='group text-sm md:text-xl transition-all text-left mb-4 font-bold text-slate-100 hover:cursor-pointer tracking-wide hover:text-teal-500'><span className='text-[1.3em] text-teal-500 group-hover:text-slate-100'>H</span>ome</li>
                <li className='group text-sm md:text-xl transition-all text-left mb-4 font-bold text-slate-100 hover:cursor-pointer tracking-wide hover:text-teal-500'><span className='text-[1.3em] text-teal-500 group-hover:text-slate-100'>A</span>bout</li>
                <li className='group text-sm md:text-xl transition-all text-left mb-4 font-bold text-slate-100 hover:cursor-pointer tracking-wide hover:text-teal-500'><span className='text-[1.3em] text-teal-500 group-hover:text-slate-100'>P</span>rojects</li>
                <li className='group text-sm md:text-xl transition-all text-left mb-4 font-bold text-slate-100 hover:cursor-pointer tracking-wide hover:text-teal-500'><span className='text-[1.3em] text-teal-500 group-hover:text-slate-100'>S</span>kills</li>
                <li className='group text-sm md:text-xl transition-all text-left mb-4 font-bold text-slate-100 hover:cursor-pointer tracking-wide hover:text-teal-500'><span className='text-[1.3em] text-teal-500 group-hover:text-slate-100'>C</span>ontact</li>
           </ul>
           <div className='text-teal-300'>
            <Footer />
           </div>
        </header>
      )
}