import React from 'react'
export const metadata = {
  title: "Products",
  description: "Products page for Dokan",
  keywords: "products, shop, ecommerce",
};
const ProductsLayout = ({ children }) => {
  return (
    <div className='flex flex-col justify-center items-center m-5 p-5'>
      {children}
      <h2 className='mt-5 text-lg font-semibold'>Product related</h2>
    </div>
  )
}

export default ProductsLayout
