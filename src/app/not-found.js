import React from 'react'

const PageNotFound = () => {
  return (
    <div className='container mx-auto p-5 flex items-center flex-col justify-center min-h-screen h-[85vh]' >
       <h1 className='text-3xl text-red-900 text-center bg-black rounded-2xl p-5'>404 - Page Not Found</h1>
      <p className='text-center mt-4'>The page you are looking for does not exist.</p>  

    <a className='p-3 m-10 bg-red-700 hover:bg-red-900' href="/">Return to Home Page</a>

    </div>
  )
}

export default PageNotFound