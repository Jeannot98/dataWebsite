import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:p-6'>Grow with data.</h1>
            <div>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for all</p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your analytics to increase revenue for BTB, BTC, & SASS platforms</p>

            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto p-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero