'use client'

import { useEffect, useState } from "react";

export default function PageTeste() {

    const [ posts, setPosts] = useState([])


useEffect (() => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data.posts)) 
}, [])


    return (
    <div>
      <h1 className="text-center mt-5 mb-2 font-bold text-3x1">
        Página Client
      </h1>

      <button onClick={() => alert ("TESTEE")}>
        TESTEE
      </button>

        <div className="flex flex-col gap-1 mx-2">
            {posts.map((post: any) => (
                <div key={post.id} className="bg-gray-200 p-6 rounded-md">
                    <h2 className="font-bold">{post.tittle}</h2>
                    <p>{post.body}</p>
                </div>
            ))}

        </div>
        </div>
    );
}

