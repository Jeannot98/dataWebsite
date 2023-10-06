import React from 'react'

const SingleCard = ({img, h2, price, p1, p2, p3, color, textColor}) => {
    return (
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:bg-gray-300 duration-500'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={img} alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>{h2}</h2>
            <p className='text-center text-4xl font-bold'>{price}</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>{p1}</p>
                <p className='py-2 border-b mx-8'>{p2}</p>
                <p className='py-2 border-b mx-8'>{p3}</p>
            </div>
            <button className={`${color} w-[200px] rounded-md font-medium my-6 mx-auto p-3 ${textColor}`}>Start Trail</button>
        </div>
    )
}

export default SingleCard