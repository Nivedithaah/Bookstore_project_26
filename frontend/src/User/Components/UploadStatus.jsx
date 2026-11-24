import React from 'react'

function UploadStatus() {
    return (
        <div className='p-30 my-15 shadow rounded'>
            {/* duplicate book status */}
            <div className='bg-gray-200 rounded p-5 mt-4'>
                <div className='md:grid grid-cols-[3fr_1fr]'>
                    <div className='px-4'>
                        <h1 className='text-2xl font-bold'>Title</h1>
                        <h2 className='text-xl font-medium'>Author</h2>
                        <h3 className='text-md text-red-800'>Price</h3>
                        <p className='font-bold'>Abstract : </p>
                        <div className='flex mt-5'>
                            <img style={{height:'140px', width:'140px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkF9HzEG86lBLFln_gYcyuCH5VpviBD27vEjxn2QEn_Q&s=10" alt="pending" />
                            <img style={{height:'140px', width:'140px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-e5G4coVPso0XpzLZCtFFkpl0hUtDE5MmfQNbcA-UsQ&s=10" alt="Sold" />

                            <img style={{height:'140px', width:'140px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3LyGpw4yJCrCYcIRNPeqYD9g9LIYg4Eq_KKKyj-whA&s=10" alt="Approved" />
                        </div>
                    </div>
                    <div className='px-5 mt-5 md:mt-0'>
                         <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Wg2K3Or64D5qmHFN4U-eGD1JFvHp3UJpeOWcW8HMywLl2D9L--tBkjI&s=10" alt="Books" />
                         <div className='flex justify-end'>
                            <button className='bg-red-800 font-bold text-white px-3 py-2 rounded mt-5 hover:bg-red-600 '>Delete</button>
                         </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default UploadStatus
