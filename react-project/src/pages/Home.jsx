import React from 'react'
import Header from '../components/Header'
import HomeCard from '../components/HomeCard'
import JobLists from '../components/JobLists'


const Home = () => {
  return (
    <div className='max-w-6xl mx-auto p-4 my-10 space-y-6'>
        <Header/>
        <HomeCard/>
        <div>
            <h1 className='text-2xl font-bold text-slate-900 mb-4'>Latest Jobs</h1>
        <JobLists/>
        </div>
    </div>
  )
}

export default Home
