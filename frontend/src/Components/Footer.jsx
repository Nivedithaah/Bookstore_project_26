import React from 'react'
import { FaArrowCircleRight, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <>
    <div className='md:grid  grid-cols-3 md:gap-10 bg-black text-white'>
      <div>
      <h4 className='font-bold'>ABOUT US</h4>
      <p className='mt-5 text-justify'>We believe books are more than just pages - they are windows into new worlds, teachers of wisdom, and companions for life. Our journey begin with a passion for storytelling and a mission to make reading accessible, enjoyable , and inspiring for everyone.</p>
    </div>
    <div className='flex flex-col md:mt-0 mt-5'>
      <h4 className='font-bold'>NEWS LETTER</h4>
      <p  className='my-5'>Stay tuned for latest trends</p>
      <div className='flex'>
        <input type="text" placeholder='E-mail' className='border bg-white text-black p-2' />
        <button className='bg-yellow-500 p-2'><FaArrowCircleRight/></button>
      </div>
      </div>
      {/* follow us session */}
      <div className='flex flex-col md:mt-0 mt-5'>
      <h4 className='font-bold'>FOLLOW US</h4>
      <p  className='my-5'>Let us be social</p>
      <div className='flex'>
        <FaFacebookF/>
        <FaInstagram className='mx-5'/>
        <FaTwitter/>
        <FaEnvelope className='mx-5'/>
      </div>
      </div>
    </div>
      
    </>
  )
}

export default Footer
