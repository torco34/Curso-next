import React from 'react'
import ButtonLinke from './ButtonLinke'
import Link from 'next/link'
const fetchPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60
        }
    }).then(res => res.json())
}
export async function ListaOfPosts() {
    const posts = await fetchPosts()

    return posts.slice(0, 5).map((post: any) => (<article className='container' key={post.id}>
        <Link href="/post/[id]" as={`/posts/${post.id}`}>
            <div>
                <h2>{post.title}</h2>
                <p>{post.body} </p>
            </div>
        </Link>
        <ButtonLinke id={post.id} />
    </article>
    ))
}
