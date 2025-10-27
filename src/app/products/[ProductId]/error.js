'use client'
import React from 'react'

const ProductError = ({error}) => {
  return (
    <div className='w-full border border-white rounded-2xl flex flex-col justify-center items-center  h-100'>
      <h1 className='text-red-900 text-4xl'>{error.message}</h1>
    </div>
  )
}

export default ProductError