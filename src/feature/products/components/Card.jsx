import React from 'react'

const Card = ({product}) => {
  return (
    <div className='min-h-40 p-4 space-y-2  text-black w-full '>
      <div className='aspect-auto min-h-[22rem] w-full bg-gray-100 flex items-center justify-center'>
        <img  className='overflow-hidden p-10' src={product.image} alt="" />
      </div>
      <div className=''>
        <span className='text-xs text-gray-800'>{product.category}</span>
        <p>{product.title}</p>
        <p className='font-bold text-xl'>${product.price}</p>
      </div>
    </div>
  )
}

export default Card