import React from 'react'
import { SiCodeblocks } from "react-icons/si";
export default function Logo() {
  return (
    <div className='flex flex-col justify-center items-center text-2xl md:text-4xl mt-2'>
        <SiCodeblocks/>
        <span className='text-sm uppercase font-bold'>f<span className='text-slate-100 font-normal'>ull</span> s<span className='text-slate-100 font-normal'>tack</span></span>
        <span className='text-sm uppercase px-1 bg-teal-700 text-slate-50'>developer</span>
    </div>
  )
}
