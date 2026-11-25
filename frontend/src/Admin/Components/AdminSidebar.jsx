import React from 'react'
import { FaChartSimple, FaDatabase, FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <div className='bg-blue-100 md:min-h-screen py-10'>
      {/* image */}
      <div className='flex justify-center'>
        <img style={{ height: '120px', width: '120px', borderRadius: '70%' }} src="https://img.magnific.com/free-vector/user-circles-set_78370-4704.jpg?semt=ais_hybrid&w=740&q=80" alt="no image" />
      </div>
      {/* name */}
      <h1 className='font-semibold text-2xl my-3 text-center'>Admin</h1>
      {/* links */}
      <div className='flex flex-col justify-center items-center font-medium'>
        <div className='mt-2'><Link to={'/admin'} className='flex items-center'><FaChartSimple className='me-3' />Dashboard</Link></div>
        <div className='mt-2'><Link to={'/admin/resources'} className='flex items-center'><FaDatabase className='me-3' />Resourses</Link></div>
        <div className='mt-2'><Link to={'/admin/settings'} className='flex items-center'><FaGear className='me-3' />Settings</Link></div>
      </div>
    </div>
  )
}

export default AdminSidebar
