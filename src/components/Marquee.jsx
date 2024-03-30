import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-["100vw"] py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 py-4 border-zinc-300 whitespace-nowrap flex uppercase font-semibold'>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{repeat: Infinity, duration: 20}} className='text-[25vw] leading-none font-["FoundersGrotesk"] pt-10 pr-20'>We Are Ochi </motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{repeat: Infinity, duration: 20}} className='text-[25vw] leading-none font-["FoundersGrotesk"] pt-10 pr-20'>We Are Ochi </motion.h1>
        </div>
    </div>
  )
}

export default Marquee