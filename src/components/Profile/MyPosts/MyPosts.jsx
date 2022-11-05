import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let posts = [
    {id:1, message: 'Hi, how are you?', likesCount: 12},
    {id:2, message: 'Tt\'s my first post!!!', likesCount: 11},
  ]

  let postsElements = posts.map((post)=> {
    return <Post message={post.message} likesCount={post.likesCount} />
  })
  return (
    <div className={styles.post}>
        <h3>My Posts</h3> 
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>            
        </div>
        <div className={styles.posts}>
            {postsElements}               
        </div>
    </div>
  )
}

export default MyPosts