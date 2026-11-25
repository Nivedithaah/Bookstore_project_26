import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'

function AdminResource() {
  const [currenttab,setCurrentTab] = useState(1)

  return (
      <>
    <AdminHeader/>
      <div className='md:grid grid-cols-5'>
        {/* first section */}
        <div className='col-span-1'>
          <AdminSidebar/>
        </div>
        {/* second section */}
        <div className='col-span-4 p-10'>
          <h1 className='text-center font-bold pt-5 text-3xl'>All Resources</h1>
          <div className='flex justify-center items-center my-8 font-semibold text-lg'>
        <p onClick={()=>setCurrentTab(1)} className={currenttab==1 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer': 'p-4 border-gray-200 border-b rounded cursor-pointer'}>Books</p>
        <p onClick={()=>setCurrentTab(2)} className={currenttab==2 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer': 'p-4 border-gray-200 border-b rounded cursor-pointer'}>Users</p>
       </div>
       {/* tab contents */}
       {currenttab==1 && <div className='md:grid grid-cols-4 w-full my-10'>
          <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NzRTMRhzdw1qvJO0n1cjVCROYEwjBRte7CsSt5zweA&s" alt="no image" />
            <div className='flex flex-col justify-center items-center mt-4'>
              <h1 className='text-xl font-bold'>Author</h1>
              <h3 className='text-lg font-bold'>Title</h3>
              <p className='font-bold'>$32</p>
              <button className='bg-green-600 text-white p-2 w-full rounded'>Approve</button>
            </div>
          </div>
        </div>}
       {currenttab==2 &&
        <div className='md:grid grid-cols-3 w-full my-5'>
          {/* Duplicate according to the users */}
          <div className='rounded bg-gray-200 p-2 m-3'>
            <p className='text-red-500 font-bold text-md '>ID : </p>
            <div className='flex items-center mt-3'>
              
                      <img style={{ height: '80px', width: '80px', borderRadius: '50%' }} src="https://img.magnific.com/free-vector/user-circles-set_78370-4704.jpg?semt=ais_hybrid&w=740&q=80" alt="no image" />
                      <div className='flex flex-col w-full ms-3'>
                        <h4 className='text-blue-400 font-bold text-md'>Username :</h4>
                        <p className='text-xs'>Usergmail@gmail.com</p>
                      </div>
            </div>

          </div>
        </div>}
        </div>

      </div>
    <Footer/>
    </>
  )
}

export default AdminResource
