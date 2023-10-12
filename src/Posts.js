import React, { useState } from 'react'
import Post from './Post'

export default function Posts(props) {

 let [posts_data, setPostsData] = useState(props.posts)
 let [text, setText] = useState('');
 let [postTitle, setPostTitle] = useState('')

 let text_ref = React.createRef();
 let add_ref = React.createRef()

  function deletePost(post_id){
    setPostsData(posts_data.filter(p =>{
      return p.id != post_id
    }));
  }
 
  let posts = posts_data.map(p => {
    return <Post id={p.id} title={p.postTitle} text={p.text} url={p.url} deletePost={deletePost} />
  })

  return (
    <div>

      <div className='form'>
        <input type="text" ref={text_ref} />
        <button type="button" className='add-post-btn' ref={add_ref} >Добавить</button>
      </div>
      {posts}
    </div>
  )
}
