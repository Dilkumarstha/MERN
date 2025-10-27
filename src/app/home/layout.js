import React from 'react'
import config from '@/config'
const Home = ({children}) => {
  return (
        <div className="flex flex-col items-center justify-center   px-4 space-y-8  m-10 ">

      <h1 className="text-2xl text-bg text-center w-full  bg-primary rounded-2xl p-5">
        Welcome to {config.appName}
      </h1>

       {children}

    </div>
  )
}

export default Home