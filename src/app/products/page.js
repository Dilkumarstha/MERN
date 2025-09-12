import React from "react";
import ProductCard from "./_components/Card";

const Products = async () => {
  const Products = await fetch("https://fakestoreapi.com/products");
  const data = await Products.json();

  console.log(data);
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (

    <div>
{
  data.map((product,index) => (
    <ProductCard key={index} product={product} />
  ))
}
    </div>
  );
};

export default Products;
