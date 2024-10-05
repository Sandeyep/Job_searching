import React, { useEffect, useState } from 'react'
import JobCard from './JobCard'
import axios from 'axios'

const JobLists = () => {
  const [jobs,setJobs]=useState([])

  const getJobs =async() =>{
    try{
    const res= await axios.get('http://localhost:4000/jobs')
    setJobs(res.data)
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getJobs()
  },[])

  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {
        jobs?.map(job=>(
          <JobCard key={job.id} job={job}/>
        ))
      }
    </div>
  )
}

export default JobLists
