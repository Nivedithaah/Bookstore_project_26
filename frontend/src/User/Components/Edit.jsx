import React, { useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { FaXmark } from "react-icons/fa6";

function Edit() {
  const [offCanvas,setOffCanvas] = useState(false)
  return (
    <div>
      {/* button */}
      <button onClick={()=>setOffCanvas(true)} className='bg-black text-white font-bold p-2 flex items-center justify-center rounded hover:bg-white hover:text-black border'><FaPen className='me-2'/>Edit</button>

      {/* offcanvas */}
   
      { offCanvas &&
       <div>
          <div className='bg-gray-500/75 inset-0 fixed w-full h-full'></div>
        <div className='bg-white h-full z-50 fixed w-90 top-0 left-0'>
          {/* Head */}
          <div className='flex justify-between bg-black text-white p-3 text-xl font-bold items-center mb-5'>
            <h1>Update User Profile</h1>
            <FaXmark onClick={()=>setOffCanvas(false)} />
          </div>
          {/* Body */}
          <div className='flex justify-center items-center  my-5 flex-col'>
            <label htmlFor="userProfile">
              <input type="file" id='userProfile' hidden/>
              <img style={{height:'100px',width:'100px', borderRadius:'50%'}}  src="https://img.magnific.com/free-vector/user-circles-set_78370-4704.jpg?semt=ais_hybrid&w=740&q=80" alt="no image" />
              <button style={{marginLeft:'60px',marginTop:'-25px'}} className='bg-black text-white px-2 py-2 rounded z-52 fixed'><FaPen/></button>
            </label>
            {/* username */}
            <div className='mt-10 mb-3 w-full px-5'>
              <input type="text" placeholder="Username" className=' bg-gray-200 rounded p-2 w-full' />
            </div>
            {/* password */}
             <div className='mb-3 w-full px-5'>
              <input type="password" placeholder="New Password" className=' bg-gray-200 rounded p-2 w-full' />
            </div>
            {/* new password */}
             <div className=' mb-3 w-full px-5'>
              <input type="password" placeholder="Confirm Password" className=' bg-gray-200 rounded p-2 w-full' />
            </div>
            {/* bio */}
             <div className=' mb-3 w-full px-5'>
              <input type="text" placeholder="Bio" className=' bg-gray-200 rounded p-2 w-full' />
            </div>
            {/* reset & update button */}
            <div className='flex  justify-end w-full pe-6'>
              <button className='bg-yellow-600 text-white px-5 py-1 font-bold rounded '>Reset</button>
              <button className='bg-green-600 text-white px-5 py-1 font-bold rounded ms-3'>Update</button>
            </div>
          </div>
        </div>
       </div>}
      

    </div>
  )
}

export default Edit
