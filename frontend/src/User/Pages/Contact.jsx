
import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaLocationPin } from "react-icons/fa6";
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <>
      <Header />

      <div className='md:px-20 my-5 p-5'>
        <h1 className='text-center font-bold text-3xl my-5'>
          Contact
        </h1>

        <p className='text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio molestias maiores quae nostrum hic neque, laudantium
          labore nisi inventore accusantium sit id sapiente quisquam
          similique sed cumque animi pariatur delectus!
          Quae, unde exercitationem! Voluptatem nihil nesciunt eveniet
          rerum, qui architecto non possimus atque nisi, beatae fugiat
          delectus explicabo? Ex asperiores quae nemo modi voluptates
          dolores itaque, voluptas eius repellat nisi.
          Necessitatibus dolore debitis tenetur quas quo! Quibusdam
          delectus reiciendis minus, magnam maiores, amet exercitationem
          temporibus fugit ut debitis assumenda voluptatum.
          Tempore nesciunt debitis earum in ipsa autem vero repellendus
          quis voluptate quisquam eaque reprehenderit expedita.
        </p>

        {/* Contact Details */}
        <div className='md:grid md:grid-cols-3 items-center mt-5 p-5 md:px-40'>

          <div className='flex items-center'>
            <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center bg-gray-300'>
              <FaLocationPin />
            </div>
            <p className='ms-5'>
              123 Main Street, Apt 48, AnyTown CA, 91234
            </p>
          </div>

          <div className='flex items-center'>
            <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center bg-gray-300'>
              <FaPhone />
            </div>
            <p className='ms-5'>+09 8546321996</p>
          </div>

          <div className='flex items-center'>
            <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center bg-gray-300'>
              <FaEnvelope />
            </div>
            <p className='ms-5'>contact@bookstore.com</p>
          </div>

        </div>

        {/* Message and Map */}
        <div className='md:grid grid-cols-2 gap-10 my-5 p-5 md:px-40'>

          <div className='bg-gray-200 text-center p-5'>
            <h1 className='font-semibold text-2xl'>
              Send Us Message!
            </h1>

            <form>
              <div className='mb-5 mt-10'>
                <input
                  type="text"
                  placeholder='Name'
                  className='bg-white w-full p-2' />
              </div>

              <div className='mb-5 mt-10'>
                <input
                  type="email"
                  placeholder='E-Mail'
                  className='bg-white w-full p-2'
                />
              </div>

              <div className='mb-5 mt-10'>
                <textarea
                  placeholder='Message'
                  className='bg-white w-full p-2'
                />
              </div>

              <div className='my-5'>
                <button className='bg-black text-white w-full p-2 rounded flex justify-center items-center'>Submit<FaPaperPlane className='ms-2' />
                </button>
              </div>
            </form>
          </div>
          <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.55832925391!2d76.30939505235831!3d10.00881345412297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Keralam!5e0!3m2!1sen!2sin!4v1795065844284!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
          </div>


        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact
