import React from 'react'
import { ListaOfPosts } from './ListaOfPosts';
interface PostProps {
    params: {
      id: string;
    };
  }
  
const Post = ({ params }:PostProps) => {
const {id} = params
    return (
        <><ListaOfPosts   />{id}</>
    )
}

export default Post