import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import SingleCard from './SingleCard'

const Card = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1024px] mx-auto grid md:grid-cols-3 gap-8'>
            <SingleCard img={Single} h2="Single User" price="$149" p1="500 GB Storage" p2="1 Granted User" p3="Send up to 2 GB" color="bg-[#00df9a]"/>
            <SingleCard img={Double} h2="Single User" price="$149" p1="500 GB Storage" p2="1 Granted User" p3="Send up to 2 GB" color="bg-[#000300]" textColor="text-[#00df9a]"/>
            <SingleCard img={Triple} h2="Single User" price="$149" p1="500 GB Storage" p2="1 Granted User" p3="Send up to 2 GB" color="bg-[#00df9a]"/>
        </div>
    </div>
  )
}

export default Card