import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const user=false
  return (
    <div className='border shadow-md p-4'>
        <div className='flex justify-between max-w-6xl mx-auto'>
        {/* left */}
      <div className='text-2xl font-bold'>Dev Jobs</div>

      {/* Middle */}
      <ul className='flex gap-4 font-semibold text-lg'>
        <Link to='/'>
        <li>Home</li>
        </Link>

        <Link to='/jobs'>
        <li>Jobs</li>
        
        </Link>

        <Link to='/addjob'>
        <li>Add Jobs</li>
        </Link>
      </ul>

      {/* Right */}
      <div className='flex gap-4 font-semibold text-lg'>
        {
            user ? <button>Logout</button> :(
                <>
                <Link to='/register'>
                        <button>Register</button>
                </Link>
                
                <Link to='/login'>
                        <button>Login</button>
                </Link>
                </>
            )
        }

        
      </div>
    </div>
    </div>
  )
}

export default Navbar
