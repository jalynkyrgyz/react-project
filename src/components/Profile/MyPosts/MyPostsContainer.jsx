// import React from 'react'
import { addPostActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return {
    posts: state.profilesPage.posts,
    newPostText: state.profilesPage.newPostText
  }
}

let mapDispatchToProps = (dispatch)=> {
  return {    
    addPost: (newPostText)=> {
      dispatch(addPostActionCreator(newPostText))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps )(MyPosts)

  // const MyPostsContainer = connect(mapStateToProps,{
  //   updateNewPostText: updateNewPostTextActionCreator,
  //   addPost:addPostActionCreator   
  //   } )(MyPosts)

export default MyPostsContainer