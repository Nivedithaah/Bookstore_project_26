import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
    {/* Header top */}
    {/* logo part */}
  <div className='flex justify-between items-center p-3 md:px-20'>
       <div className='flex items-center '>
            <img width={'50px'} height={'50px'} src="https://img.magnific.com/free-vector/stack-colorful-books_1308-171744.jpg?semt=ais_hybrid&w=740&q=80" alt="no image" />
          <h1 className='text-2xl ms-3 font-bold '>Bookstore</h1>
          </div>
          {/* logout */}
          <button className='bg-black text-white px-3 py-2 rounded font-bold flex items-center hover:bg-red-700 hover:text-white border'>Logout<FaPowerOff className='ms-3'/></button>
  </div>
    {/* Header Marquee */}
    <div className='bg-black text-white font-bold p-3'>
      <marquee behavior="" direction="">Welcome Admin , You're all set to manage and moniter the system.Let's get into work!!!</marquee>
    </div>
      
    </>
  )
}

export default AdminHeader
