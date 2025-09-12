import React from 'react'

const ProducsLayout = ({children}) => {
  return (
   <div className='  m-5 p-5 flex flex-col justify-center items-center'>
    {children}
    <h2>product related</h2>
   </div>
    
  )
}

export default ProducsLayout