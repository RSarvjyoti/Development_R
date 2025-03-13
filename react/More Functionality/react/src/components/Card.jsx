import React from 'react'

function Card({id, title, image}) {
  return (
    <div className='flex flex-col rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white max-w-sm'>
      <div className='relative h-48 w-full'>
        <img 
          className='w-full h-full object-cover' 
          src={image} 
          alt={title} 
        />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-gray-800 truncate'>{title}</h3>
      </div>
    </div>
  )
}

export default Card