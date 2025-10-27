import Link from "next/link";
import React from "react";

const ProductCard = ({product}) => {
  console.log(product.id)
  return (
    
    <div className=" text-white flex flex-col gap-2   shadow-md py-3 px-4 w-90 rounded-xl hover:scale-105 duration-300 cursor-pointer hover:shadow-orange-300">
      <img 
        src={product.imageUrls[0]} 
        alt={product.name} 
        className="w-full h-48 object-cover rounded-md"
      />

      <p><Link href={`/products/${product.id}`}>{product.name}</Link></p>
     <div className="flex items-center gap-2 text-sm py-2">
         <span className="bg-orange-500 px-3 rounded text-black ">{product.category}</span>
      <span className="bg-yellow-500 px-3 rounded text-black ">{product.brand}</span>
     </div>
      <p>Rs. {product.price}</p>
<button className=" px-3 py-1 rounded-md bg-blue-600 text-white shadow">Add to Cart</button>
    </div>
  
  );
};

export default ProductCard;
