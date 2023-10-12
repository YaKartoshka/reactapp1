import React, { useEffect, useState } from 'react'
import Post from './Post'
import Posts from './Posts'

export default function Main(props) {

  const [count, setCount] = useState(0);


  useEffect(()=>{

    setTimeout(()=>{
      setCount(count+1)
    }, 1000)

  })

  return (
    <div>
      <h2>{count}</h2>
      <Posts posts={props.data.posts}/>
    </div>
  )
}
