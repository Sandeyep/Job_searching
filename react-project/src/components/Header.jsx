import React from 'react'

const Header = () => {
  return (
    <div className='h-[40vh] bg-indigo-400 rounded-xl shadow-md flex justify-center
    items-center' >
        <div className='text-center text-white space-y-4'>
        <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold uppercase'>Become a developer</h1>
        <p className='text-xl'>Find the programming job that fits your skill set</p>
        </div>
    </div>
  )
} 

export default Header
