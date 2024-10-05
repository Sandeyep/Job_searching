import React from 'react'
import JobLists from '../components/JobLists'

const Jobs = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 my-10'>
     <div>
        <label htmlFor='type'>Filter By Type</label>
        <select name='type' id='type'>
            <option value="All-Types">All-Types</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
        </select>
     </div>
     <div className='border border-gray-100 my-4'></div>
     <JobLists/>
    </div>
  )
}

export default Jobs
