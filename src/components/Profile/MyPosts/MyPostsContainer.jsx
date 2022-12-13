import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import StoreContext from '../../../storeContext'


const MyPostsContainer = (props) => { 
  
  
  return (
    <StoreContext.Consumer>
    { (store)=> {
          let state = store.getState()
          let addPost = ()=> {
            store.dispatch(addPostActionCreator())      
          }
          let onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text)
              store.dispatch(action)     
          }
          return  (
            <MyPosts updateNewPostText = {onPostChange}
                    addPost={addPost} 
                    posts={state.profilesPage.posts} 
                    newPostText={state.profilesPage.newPostText}/>
          )
        } 
    }
      
    </StoreContext.Consumer>
    
  )
}

export default MyPostsContainer