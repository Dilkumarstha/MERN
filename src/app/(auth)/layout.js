import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div>

      <h1 className="text-2xl text-whtie-900 text-center  bg-red-900 rounded-2xl p-5">
        Welcome to Ghar Sau
      </h1>

      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt,
        dicta!
      </p>
      
      {children}
    </div>
  );
};

export default AuthLayout;
