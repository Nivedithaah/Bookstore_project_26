import React from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'

function AdminSettings() {
  return (
       <>
    <AdminHeader/>
      <div className='md:grid grid-cols-5'>
        {/* first section */}
        <div className='col-span-1'>
          <AdminSidebar/>
        </div>
        {/* second section */}
<div>settings</div>
      </div>
    <Footer/>
    </>
  )
}

export default AdminSettings
