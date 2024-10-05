import React from 'react'

const HomeCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='border-rounded-xl p-4 shadow-md bg-indigo-100 space-y-4'>
        <h1 className='font-bold text-lg'>For Developers</h1>
        <p>Browse our React jobs and start your career today</p>
        <button className='bg-slate-800 hover:bg-slate-600
        hover:scale-110 duration-300 ease-in-out delay-150
         text-white rounded-lg p-2'>Browse Jobs</button>

      </div>

      <div className='border-rounded-xl p-4 shadow-md bg-gray-300 space-y-4'>
        <h1 className='font-bold text-lg'>For Employeers</h1>
        <p>List your job to find the perfect developer for the role </p>
        <button className='bg-teal-800 hover:bg-teal-600
        hover:scale-110 duration-300 ease-in-out delay-150 hover:-translate:x-10
        text-white rounded-lg p-2'>Browse Jobs</button>

      </div>
    </div>
  )
}

export default HomeCard
