import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../Components/Edit'
import UploadBooks from '../Components/UploadBooks'
import UploadStatus from '../Components/UploadStatus'
import PurchaseHistory from '../Components/PurchaseHistory'

function Profile() {

  const [currenttab,setCurrentTab] = useState(1)

  return (
    <>
    <Header/>
      <div className='bg-black' style={{height:'200px'}}>      </div>
        <div className='bg-white p-3' style={{height:'230px',width:'230px',borderRadius:'50%',marginLeft:'75px',marginTop:'-130px'}}>
          <img style={{height:'200px',width:'200px',borderRadius:'50%'}} src="https://img.magnific.com/free-vector/user-circles-set_78370-4704.jpg?semt=ais_hybrid&w=740&q=80" alt="user" />
        </div>
       <div className='flex justify-between px-20 mt-5'>
          <div className='flex items-center'>
            <h2 className='font-bold md:text-2xl text-3xl'>Username</h2>
            <FaCircleCheck className='text-blue-500 ms-3'/>
          </div>
          <Edit/>
       </div>
       <p className='text-xl font-bold px-20 mt-5'>Bio</p>
       <p className='text-justify items-center px-20 my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure fugit assumenda natus iste itaque repudiandae, provident numquam, est excepturi modi totam at iusto molestias nihil! Quod saepe eveniet maiores minima!
       Officiis ab fugiat ratione amet repudiandae consectetur assumenda ipsa perspiciatis ipsam temporibus adipisci aut consequatur est numquam officia neque dicta, ex doloribus molestiae vero corporis velit labore veritatis? Eveniet, esse!</p>
       <div className='flex justify-center items-center my-8 font-semibold text-lg'>
        <p onClick={()=>setCurrentTab(1)} className={currenttab==1 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer': 'p-4 border-gray-200 border-b rounded cursor-pointer'}>Upload Books</p>
        <p onClick={()=>setCurrentTab(2)} className={currenttab==2 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer': 'p-4 border-gray-200 border-b rounded cursor-pointer'}>Upload Book Status</p>
        <p onClick={()=>setCurrentTab(3)} className={currenttab==3 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer': 'p-4 border-gray-200 border-b rounded cursor-pointer'}>Purchase History</p>
       </div>
       {currenttab==1 && <div><UploadBooks/></div>}
       {currenttab==2 && <div><UploadStatus/></div>}
       {currenttab==3 && <div><PurchaseHistory/></div>}


      <Footer/>
    </>
  )
}

export default Profile
