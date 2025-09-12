import React from "react";

const Products = ({ params }) => {
  const slugs = params.slug ; // array of dynamic parts

  return (
    <div>

      {slugs.map((slug, index) => (
        <h2 key={slug}>Segment {index + 1}: {slug}</h2>
      ))}
   
    </div>
  );
};

export default Products;
 