import React from "react";

// Skeleton for a single product card
const LoadingCard = () => {
  return (
    <div className="flex  flex-col gap-2 shadow-md py-3 px-4 rounded-xl animate-pulse w-90">
      <h2 className="w-full h-50 bg-gray-400 rounded"></h2>
      <p className="w-full h-5 bg-gray-400 rounded"></p>
      <div className="flex items-center gap-2 text-sm py-2">
        <span className="w-16 h-5 bg-orange-400 rounded"></span>
        <span className="w-10 h-5 bg-yellow-400 rounded"></span>
      </div>
      <p className="w-20 h-5 bg-gray-400 rounded"></p>
      <button className="w-full h-8 bg-blue-400 rounded-md"></button>
    </div>
  );
};

const ProductLoader = () => {
  return (



    <div className="flex justify-center flex-wrap gap-4 lg:gap-10 w-full">
  {Array.from({ length: 20 }).map((_, index) => (
    <LoadingCard key={index} />
  ))}
</div>
  );
};

export default ProductLoader;
