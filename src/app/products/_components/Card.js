import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <span>{product.brand}</span>
      <span>{product.category}</span>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;
