import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  
  let postsElements = props.posts.map((post)=> {
    return <Post message={post.message} likesCount={post.likesCount} />
  })

  let newPostElement = React.createRef()

  let addPost = ()=> {
    // let text = newPostElement.current.value
    // props.addPost()      
    props.dispatch({type: 'ADD-POST'})      
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    // props.updateNewPostText(text)    
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text}
    props.dispatch(action)    
  }

  return (
    <div className={styles.post}>
        <h3>My Posts</h3> 
        <div>
          <div>
            <textarea
             onChange={onPostChange}
             ref={newPostElement}
             value={props.newPostText}/>
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>            
        </div>
        <div className={styles.posts}>
            {postsElements}               
        </div>
    </div>
  )
}

export default MyPosts