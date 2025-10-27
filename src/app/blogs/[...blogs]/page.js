import React from 'react'

const BlogsDetails = ({params}) => {
    const {blogs} = params;
    console.log(blogs);
  return (
  <div>
    <h1>
        This is blogs details page {blogs};
    </h1>
  </div>
  )
}

export default BlogsDetails