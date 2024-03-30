import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen  flex items-center px-20 gap-5'>
        <div className='cardscontainer w-1/2 h-[60vh]'>
            <div className='card relative w-full h-full rounded-xl flex items-center justify-center bg-[#004D43]'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute py-1 px-5 border-2 left-10 bottom-10 rounded-full'>&copy; 2019-2022</button>
            </div>
        </div>
        <div className='cardscontainer w-1/2 h-[60vh] flex gap-5'>
            <div className='card relative w-1/2 h-full rounded-xl bg-[#091514] flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute py-1 px-5 border-2 left-10 bottom-10 rounded-full uppercase'>Rating 5.0 on clutch</button>
            </div>
            <div className='card relative w-1/2 h-full rounded-xl bg-[#091514] flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute py-1 px-5 border-2 left-10 bottom-10 rounded-full uppercase'>business bootcamp alumni</button>
            </div>
        </div>
    </div>
  )
}

export default Cards