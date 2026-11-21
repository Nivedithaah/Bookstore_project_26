import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Books() {
const [toggle,setToggle] = useState(false)

  return (
    <>
    <Header/>
      <div className='flex flex-col justify-center items-center my-5'>
        <h1 className='font-bold text-3xl my-5'>All Books</h1>
        <div>
          <input type="text" className='border border-gray-300 w-120 p-2' placeholder='Search by book title'/>
            <button className='bg-blue-500 text-white p-2 ms-5 rounded'>Search</button>
        </div>
      </div>
        {/* grid for books and filter option */}
        <div className='md:grid grid-cols-4 p-5 md:px-40 mb-10'>
          {/* filter */}
          <div className='col-span-1'>
            <div className='flex justify-between'>
              <h1 className='font-bold text-2xl'>Filter</h1>
              <button onClick={()=>setToggle(!toggle)} className='text-2xl md:hidden'><FaBars/></button>
            </div>
            {/* filter category */}
            <div className={toggle ? 'block' : 'hidden md:block'}>
            <div className='mt-3'>
                <input name='filtering' type="radio" id='no-filter'/>
                <label htmlFor="no-filter" className='ms-2'> All</label>
            </div>
            {/* duplicate filter category */}
            <div className='mt-3'>
                <input name='filtering' type="radio" id='filter'/>
                <label htmlFor="filter" className='ms-2'> Category</label>
            </div>
            </div>
        </div>
        <div className='col-span-3'>
          <div className='md:grid grid-cols-4 mt-5'>
            {/* duplicate according to the filter */}
            <div className='shadow rounded p-3 m-4'>
              <img width={'100%'} height={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Wg2K3Or64D5qmHFN4U-eGD1JFvHp3UJpeOWcW8HMywLl2D9L--tBkjI&s=10" alt="bookcard" />
              <div className='flex flex-col justify-center items-center mt-4'>
                <h2 className='font-bold text-xl '>Author</h2>
                <h5 className='text-lg mt-2'>Title</h5>
                <Link to={'/books/:id'} className='bg-blue-500 text-white rounded mt-2 font-bold p-2'>View Book</Link>
            
  
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Books
