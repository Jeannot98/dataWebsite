import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1024px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row gap-2 items-center justify-between w-full'>
                    <input className='p-3 w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto p-3 text-black'>Notify Me</button>
                </div>
                <p>We care About the protection of your data. <span className='text-[#00df9a]'>Read our privacy Policy.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter