import React from "react";
import ProductCard from "./_components/Card";

const Products = async ({ searchParams }) => {
  const query = searchParams.saman;

  const product = await fetch(
    `https://node-20250302.vercel.app/api/products?category=${query || ""}`
  );
  const products = await product.json();

  return (
    <div className="flex justify-center flex-wrap gap-4 lg:gap-10 w-full">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
