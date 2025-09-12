import React from 'react'

const contact = async({params}) => {
    const id =(await params).contact
    console.log(id)
  return (
    <div>contact:{id}</div>
  )
}

export default contact