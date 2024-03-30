import React from 'react'

function About() {
  return (
    <div className='data-scroll data-scroll-section data-scroll-speed="-.3" w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["NeueMontreal-Regular"] text-7xl tracking-tight leading-1'>
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className='w-full border-t-[1px] border-[#738146] mt-20 flex gap-10 py-4'>
          <div className='w-1/2'>
            <h1 className='text-7xl'>Our approach: </h1>
            <button className='flex uppercase items-center gap-10 px-10 py-6 bg-zinc-900 rounded-full mt-10 text-white text-l'>Read More
              <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
            </button>
          </div>
          <div className='w-1/2 h-[70vh] bg-[#bcd274] rounded-3xl'></div>
        </div>
    </div>
  )
}

export default About