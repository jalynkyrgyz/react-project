import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
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
            <Post message = 'Hi? how are you?' counter = '15'/>
            <Post message = 'It is my first post'counter = '20'/>       
        </div>
    </div>
  )
}

export default MyPosts