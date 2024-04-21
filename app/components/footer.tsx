import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <div className='flex flex-col justify-center items-center text-3xl md:text-4xl mt-2 gap-2'>
        <div className='flex flex-col justify-center items-center'>
          <FaSquareGithub />
          <a href='#' className='text-sm uppercase font-bold'>G<span className='text-slate-100 font-normal'>it</span>H<span className='text-slate-100 font-normal'>ub</span></a>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <FaFacebookSquare />
          <a href='#' className='text-sm uppercase font-bold'>F<span className='text-slate-100 font-normal'>ace</span>B<span className='text-slate-100 font-normal'>ook</span></a>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <MdEmail />
          <a href='#' className='text-sm uppercase font-bold'>E<span className='text-slate-100 font-normal'>mail</span></a>
        </div>
        {/* <span className='text-sm uppercase font-bold px-1 bg-teal-400 text-slate-50'>developer</span> */}
    </div>
  )
}
