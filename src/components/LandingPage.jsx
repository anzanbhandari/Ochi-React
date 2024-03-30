import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  motion
  return (
    <div className='w-full h-screen  bg-zinc-900 pt-2'>
      <div className='textstructure mt-40 px-20'>
        {["We Create", "Eye Opening", "Presentations"].map((item, index)=>{
          return (
        <div className='masker'>
          <div className='w-fit flex items-center overflow-hidden'>
            {index === 1 && (
            <motion.div
            initial= {{width: 0}}
            animate= {{width: "7.5vw"}}
            transition= {{ease: [0.76, 0, 0.24, 1], duration: 1}}
            className='w-[7.5vw] h-[4.9vw] rounded-md mr-[1vw] bg-green-500'>
            </motion.div>)}
            <h1 className='text-[7.5vw] uppercase leading-[6.9vw] tracking-tighter font-["FoundersGrotesk"] font-medium'>{item}</h1>
          </div>
        </div>)
        })}
        
      </div>
      <div className='border-t-[1px] border-zinc-600 mt-20 flex justify-between items-center py-5 px-20'>
        {["For Public and Private Companies", "From the first pitch to IPO"].map((item, index)=>(<p className='text-md font-light tracking-tight leading-none'>{item}</p>))}
        <div className='start flex items-center gap-2'>
          <div className='px-5 py-[-1px] border-2 rounded-full border-zinc-400 font-light uppercase font-md '>Start the Project</div>
          <div className='w-7 h-7 rounded-full flex items-center justify-center border-2 border-zinc-400'>
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage