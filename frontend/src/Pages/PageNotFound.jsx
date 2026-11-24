import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <img src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-animation-gif-download-3299960.gif" alt="no image" /> 
      <p className='font-medium pt-4'>Oh No!</p>
      <h1 className='text-2xl font-semibold'>Looks Like You're Lost</h1>
      <p>The page you're looking for is not available</p>
     <Link to={'/'} className='bg-black text-white mt-3 px-5 rounded py-2'>Home</Link>
    </div>
  )
}

export default PageNotFound
