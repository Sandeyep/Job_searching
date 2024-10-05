import React from 'react'
import {Link} from 'react-router-dom'

const JobCard = ({job}) => {
  return (
    <div className='border shadow-md rounded-x1 p-4'>

      <div className='space-y-3 '>
        <h1 className='text-gray-600 my-2'>{job.type}</h1>
        <img src='https://img.freepik.com/premium-photo/there-is-cat-that-is-sitting-ledge-chinese-garden-generative-ai_900396-35755.jpg' alt='image'  className='border rounded-lg' />
        <h3 className='text-x1 font-bold'>{job.title}</h3>
        <p>{job.description}</p>  
        <p className='text-indigo-500 mb-5'>{job.salary}</p>
      </div>

      <div className='border border-gray-100 my-5'></div>
      <div className='flex justify-between items-center'>
        <p className='text-orange-400'>{job.location}</p>
        <Link to={`/job/${job.id}`}>
        <button className='text-white bg-teal-500 p-2 rounded-md'>
            Read More
        </button>
        </Link>
      </div>
    </div>
  )
}

export default JobCard
