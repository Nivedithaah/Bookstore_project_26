import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaCamera, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaBackward } from "react-icons/fa6";


function View() {

  const [modal,setModal]=useState(false)

  return (
    <>
      <Header />
      <div className='md:m-10  m-5'>
        <div className='border shadow border-gray-300 p-4'>
          {/* grid */}
          <div className='md:grid grid-cols-4 gap-x-10'>
            {/* image */}
            <div className='col-span-1'>  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Wg2K3Or64D5qmHFN4U-eGD1JFvHp3UJpeOWcW8HMywLl2D9L--tBkjI&s=10" alt="book" />
            </div>
            <div className="col-span-3">
              <div className='flex justify-between'>
                <h3 className='font-bold text-2xl'>Title</h3>
                <button onClick={()=>setModal(true)} className='text-gray-500'><FaEye /></button>
              </div>
              <h2 className='text-blue-400 text-xl mt-2'>Author</h2>
              <div className='md:grid grid-cols-3 gap-10 my-10'>
                <p className='font-bold'>Publisher:</p>
                <p className='font-bold'>Language:</p>
                <p className='font-bold'>No. of Pages :</p>
                <p className='font-bold'>Category :</p>
                <p className='font-bold'>ISBN :</p>
                <p className='font-bold'>Orginal Price :</p>
                <p className='font-bold'>Seller :</p>
              </div>
              <div className='my-4 md:my-10'>
                <h4 className='font-bold text-2xl'>Abstract : </h4>
              </div>
              <div className='flex justify-end'>
                <Link className='bg-blue-500 text-white p-2 font-bold flex items-center rounded'><FaBackward className='me-2' />Back</Link>
                <button className='bg-green-500 p-2 text-white font-bold ms-2 rounded'>Buy $ 12</button>
              </div>

            </div>
          </div>
        </div>
        {/* modal */}
     {  modal &&
     <div onClick={()=>setModal(false)} className='relative z-10 overflow-y-auto'>
          <div className='bg-gray-400/70 fixed inset-0'>
            <div className='flex justify-center  items-center min-h-screen'>
              <div className='bg-white rounded-2xl w-100 md:w-250'>
                {/* modal title */}
                <div className='bg-black text-white p-3'>
                  <h2>Book images</h2>
                </div>
                {/* modal body */}
                <div className='relative p-3'>
                  <p className='flex items-center text-blue-500'><FaCamera className='me-3'/> Camera clicks of the book</p>
                </div>
                <div className='flex flex-wrap my-5'>
                  <img className='md:w-75 w-25 md:me-2 mb:3 md:mt-0' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR1MNIsNcXESuaG5qy17CiinjJ286FVUVgLCyFjIFBcA&s=10" alt="books" />

                </div>
              </div>
            </div>
          </div>
        </div>}
      </div>
      <Footer />
    </>
  )
}

export default View
