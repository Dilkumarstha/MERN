import React from 'react'
import ProductCard from '../_components/Card';

async function getProductById(productId){
const product = await fetch(`https://node-20250302.vercel.app/api/products/${productId}`)
  .then((res)=>res?.json())
  .catch((error)=>{
    throw new Error("Product not fff found!");
  });
  return product;
}

export const generateMetadata =async ({params})=>{
const productId = (await params).ProductId;
const product = await getProductById(productId);
  return {
    title:product?.name,
    keywords:`${product?.name},${product?.brand}`,
    description:product?.description
  }
}

const ProductDetails = async({params ,searchParams}) => {
  const productId = params.ProductId;
  const product = await getProductById(productId);
  
  return (
    <div className='container mx-auto px-4 py-8 text-white flex flex-col gap-6 '>
<h1 className='text-4xl'>ProductDetails:{productId}</h1>

<ProductCard product={product}/>

 <p>Products Description:
{product?.description}
 </p>

    </div>
  )
}

export default ProductDetails