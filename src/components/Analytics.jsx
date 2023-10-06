import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1024px] mx-auto grid md:grid-cols-2'>
            <img className='w-[450px] mx-auto my-4' src={Laptop} alt="" />
            <div className='flex flex-col  justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto veritatis dolorum unde tempora blanditiis quidem animi tenetur quod laboriosam, aut nesciunt facilis velit error totam impedit ex necessitatibus dolores.</p>
                <button className='bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 p-3 text-[#00df9a]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics