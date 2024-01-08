import React from 'react'
interface PostProps {
    params: {
      id: string;
    };
  }
  
const Post = ({ params }:PostProps) => {
    const { id } = params
    return (
        <p>Post ID: {id}</p>
    )
}

export default Post