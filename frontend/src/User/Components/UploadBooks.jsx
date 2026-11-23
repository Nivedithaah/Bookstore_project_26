import React from 'react'

function UploadBooks() {
  return (
   
    <div className='bg-gray-300 p-10 my-20 mx-50'>
        <h1 className='font-semibold text-center text-2xl'>Upload Book Details</h1>
        <div className='md:grid grid-cols-2 mt-10 w-full'>
            {/* Left section */}
            <div className='px-5'>
               <div className='mb-3'>
                    <input type="text"  placeholder='Book Title' className='w-full p-2 bg-white rounded'/>
                </div>
                 <div className='mb-3'>
                    <input type="text"  placeholder='Author' className='w-full p-2 bg-white rounded'/>
                </div>
                 <div className='mb-3'>
                    <input type="text"  placeholder='Book Cover Image' className='w-full p-2 bg-white rounded'/>
                </div>
                 <div className='mb-3'>
                    <input type="text"  placeholder='Total Pages' className='w-full p-2 bg-white rounded'/>
                </div>
                 <div className='mb-3'>
                    <input type="text"  placeholder='Orginal Price' className='w-full p-2 bg-white rounded'/>
                </div>
                 <div className='mb-3'>
                    <input type="text"  placeholder='Discount Price' className='w-full p-2 bg-white rounded'/>
                </div>
                 <div className='mb-3'>
                    <textarea type="text" rows={'4'} placeholder='Abstract' className='w-full p-2 bg-white rounded'/>
                </div>
               </div>
            {/* Right Section */}
            <div className='px-5'>
                <div className='mb-3'>
                    <input type="text"  placeholder='Publisher' className='w-full p-2 bg-white rounded'/>
                </div>
                <div className='mb-3'>
                    <input type="text"  placeholder='ISBN' className='w-full p-2 bg-white rounded'/>
                </div>
                <div className='mb-3'>
                    <input type="text"  placeholder='Language' className='w-full p-2 bg-white rounded'/>
                </div>
                <div className='mb-3'>
                    <input type="text"  placeholder='Category' className='w-full p-2 bg-white rounded'/>
                </div>
                {/* upload book file */}
                <div className='my-10 flex justify-center items-center'>
                    <label htmlFor="bookimages">
                        <input type="file" id='bookimages' hidden />
                        <img style={{width:'150px',height:'150px',borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10xUa3eOmwJ-zA0BNSNJlXtb-8bUgZ7HLmWwDKBpcbg&s=10" alt="no image" />
                    </label>
                </div>
            </div>
        </div>
    </div>
      
 
  )
}

export default UploadBooks
