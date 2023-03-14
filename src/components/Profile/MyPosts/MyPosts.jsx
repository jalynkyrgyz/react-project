import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../../common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => { 
    
  let postsElements = props.posts.map((post)=> {
    return <Post message={post.message} likesCount={post.likesCount} />
  })

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={styles.post}>
        <h3>My Posts</h3> 
        <AddNewPostRedux onSubmit={onAddPost}/>
        <div className={styles.posts}>
            {postsElements}               
        </div>
    </div>
  )
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name="newPostText" placeholder='Insert your text'
         validate={[required, maxLength10 ]} />        
      </div>
      <div>
        <button>Add post</button>
      </div>            
    </form>
  )
}

const AddNewPostRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts