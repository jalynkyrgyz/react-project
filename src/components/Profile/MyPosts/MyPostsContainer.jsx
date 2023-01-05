// import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'

/*const MyPostsContainer = (props) => {  
  
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
} */


let mapStateToProps = (state) => {
  return {
    posts: state.profilesPage.posts,
    newPostText: state.profilesPage.newPostText
  }
}

/*let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text)=>{
      let action = updateNewPostTextActionCreator(text)
      dispatch(action)
    },
    addPost: ()=>{
      dispatch(addPostActionCreator())   
    }
  }
}*/

const MyPostsContainer = connect(mapStateToProps,{
  updateNewPostText: updateNewPostTextActionCreator,
  addPost:addPostActionCreator   
  } )(MyPosts)

export default MyPostsContainer