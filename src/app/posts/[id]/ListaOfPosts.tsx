import React from 'react'
const fetchPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
}
export async function ListaOfPosts() {
    const posts = await fetchPosts()
    return (
        <div>{posts.map((posts: any) => (<div>{posts.title}</div>))}</div>
    )
}
