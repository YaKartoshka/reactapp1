import React, { useState } from 'react'

export default function Post(props) {
  let like_ref = React.createRef();
  

  let [likes, setLikes] = useState(0)

  function like() {
    like_ref.current.style.backgroundColor = 'red'
    like_ref.current.style.color = 'white'
    setLikes(likes + 1)
  }

  function dislike(){
    // js

    if(likes>0){
      setLikes(likes-1)
    }
  }

  return (
    <div className='post'>
      <h1> {props.title} </h1>
      <p> {props.text} </p>
      <img src={props.url} width={200} />
      <h5>Likes: {likes}</h5>
      <button ref={like_ref}  onClick={()=>{ props.deletePost(props.id)     } }>Like</button>
    </div>
  )
}
