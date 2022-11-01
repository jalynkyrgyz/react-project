import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
        My Posts 
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={styles.posts}>
            <Post message = 'Hi? how are you?' counter = '15'/>
            <Post message = 'It is my first post'/>
            
           
        </div>
    </div>
  )
}

export default MyPosts