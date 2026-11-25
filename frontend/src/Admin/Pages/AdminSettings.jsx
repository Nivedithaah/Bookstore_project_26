import React from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { FaPen } from 'react-icons/fa6'

function AdminSettings() {
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5'>
        {/* first section */}
        <div className='col-span-1'>
          <AdminSidebar />
        </div>
        {/* second section */}
        <div className='col-span-4 p-10'><h1 className='text-2xl font-bold text-center mb-10'>Settings</h1>
          <div className='md:grid grid-cols-2 items-center'>
            {/* first section */}
            <div>
              <h2 className='font-bold pb-6 text-xl '>Welcome, Admin 👋</h2>
              <p className='text-lg text-justify'>This is your personal administration space where you can manage your account details, system preferences, and platform roles with ease. From here, you can update essential information such as your username, password, contact details, and notification preferences — ensuring your access remains secure and personalized.</p>
              <h3 className='mt-10 font-medium text-xl mb-4'>🔧 What You Can Manage in This Section: </h3>
             
                <ul>
                  <li>✏️ Update personal details (name, email, role, profile picture)</li>
                  <li>🔐 Change or reset your password</li>
                  <li>📢 Configure notification and alert preferences</li>
                  <li>👥 Manage permissions based on assigned access level</li>
                  <li>🧩 Customize dashboard visibility and layout</li>
                </ul>
                <p className='mt-10 text-justify'>
                  You profile settings help ensure your administrative tools work the way you need them to — securely, efficiently, and with complete control. Thank you for keeping the platform organized and running smoothly. Continue managing, updating, and improving the system — one step at a time. 🚀📚</p>

            
            </div>
            {/* second section */}
             <div className='flex justify-center items-center  m-10 flex-col bg-blue-100 p-10'>
                        <label htmlFor="userProfile">
                          <input type="file" id='userProfile' hidden/>
                          <img style={{height:'100px',width:'100px', borderRadius:'50%'}}  src="https://img.magnific.com/free-vector/user-circles-set_78370-4704.jpg?semt=ais_hybrid&w=740&q=80" alt="no image" />
                          <button style={{marginLeft:'60px',marginTop:'-25px'}} className='bg-black text-white px-2 py-2 rounded z-52 '><FaPen/></button>
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
                       
                        {/* reset & update button */}
                        <div className='flex  justify-end w-full pe-6'>
                          <button className='bg-yellow-600 text-white px-5 py-1 font-bold rounded '>Reset</button>
                          <button className='bg-green-600 text-white px-5 py-1 font-bold rounded ms-3'>Update</button>
                        </div>
                      </div>
            <div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminSettings
